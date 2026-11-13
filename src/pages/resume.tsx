import React from "react";
import parse from "html-react-parser";
import { SectionError, SectionSkeleton, ViewMore } from "../components";
import {
  useEducationQuery,
  useExperiencesQuery,
  useResumeQuery,
} from "../stores/services/portfolio-api";
import { isExternalUrl } from "../utils/url";
import { useDocumentTitle } from "../hooks";

const NAME = "Nguyen Thanh Cong";

// Screen: site colours. Print: black on white, A4 (see @media print in index.css).
const sectionTitle =
  "mb-4 border-b border-slate-300/10 pb-2 text-sm font-semibold uppercase tracking-widest text-teal-300 print:mb-2 print:border-slate-300 print:text-slate-900";

const Resume = () => {
  const resume = useResumeQuery();
  const experiences = useExperiencesQuery();
  const education = useEducationQuery();

  useDocumentTitle(`Resume – ${NAME}`);

  const queries = [resume, experiences, education];
  const loading = queries.some((q) => q.isUninitialized || q.isLoading);
  const failed = queries.some((q) => q.isError);

  return (
    <div className="mx-auto max-w-3xl py-12 lg:py-20 print:max-w-none print:py-0">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <ViewMore.IconLeftSide url="/" title="Home page" />
        <button
          type="button"
          onClick={() => window.print()}
          className="mt-4 inline-flex items-center gap-2 rounded-md border border-teal-300/40 px-4 py-2 text-sm font-medium text-teal-300 hover:bg-teal-300/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14"
            />
          </svg>
          Print / Save as PDF
        </button>
      </div>

      {loading ? (
        <SectionSkeleton lines={10} />
      ) : failed || !resume.data || !experiences.data || !education.data ? (
        <SectionError />
      ) : (
        <article className="resume-print text-slate-400 print:text-[10.5pt] print:leading-snug print:text-slate-800">
          <header className="mb-10 print:mb-5">
            <h1 className="text-5xl font-bold text-slate-200 print:text-[24pt] print:text-slate-900">
              {NAME}
            </h1>
            <p className="mt-2 text-2xl font-medium text-slate-200 print:mt-1 print:text-[13pt] print:text-slate-900">
              {resume.data.title}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-base print:mt-2 print:text-[9.5pt]">
              <li>{resume.data.location}</li>
              {resume.data.contacts.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    className="text-slate-300 hover:text-teal-300 print:text-slate-800"
                    {...(isExternalUrl(c.href)
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </header>

          <section className="mb-10 print:mb-5">
            <h2 className={sectionTitle}>Summary</h2>
            <p className="text-lg leading-relaxed print:text-[10.5pt]">
              {resume.data.summary}
            </p>
          </section>

          {/* Skills sit right under the summary: it is the first thing a
              recruiter matches against the job description. */}
          <section className="mb-10 break-inside-avoid print:mb-5">
            <h2 className={sectionTitle}>Skills</h2>
            <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-[11rem_1fr] print:grid-cols-[9rem_1fr] print:gap-y-0.5">
              {resume.data.skills.map((s) => (
                <React.Fragment key={s.group}>
                  <dt className="font-medium text-slate-200 print:text-slate-900">
                    {s.group}
                  </dt>
                  <dd className="mb-2 sm:mb-0">{s.items.join(", ")}</dd>
                </React.Fragment>
              ))}
            </dl>
          </section>

          {[
            {
              title: "Experience",
              jobs: experiences.data.filter((job) => !job.freelance),
            },
            {
              // Kept out of the employment timeline so overlapping dates
              // don't read as job-hopping.
              title: "Freelance",
              jobs: experiences.data.filter((job) => job.freelance),
            },
          ]
            .filter((group) => group.jobs.length > 0)
            .map((group) => (
              <section key={group.title} className="mb-10 print:mb-5">
                <h2 className={sectionTitle}>{group.title}</h2>
                <ol className="space-y-8 print:space-y-4">
                  {group.jobs.map((job, i) => (
                    <li key={i} className="break-inside-avoid">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h3 className="text-xl font-medium text-slate-200 print:text-[11.5pt] print:font-semibold print:text-slate-900">
                          {job.position}
                          {job.freelance ? null : <> · </>}
                          {job.freelance ? null : job.href && isExternalUrl(job.href) ? (
                            <a
                              href={job.href}
                              target="_blank"
                              rel="noreferrer"
                              className="hover:text-teal-300"
                            >
                              {job.company}
                            </a>
                          ) : (
                            job.company
                          )}
                        </h3>
                        <span className="text-sm font-medium uppercase tracking-wide text-slate-400 print:text-[9pt] print:text-slate-600">
                          {job.startDate} – {job.endDate}
                        </span>
                      </div>
                      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-relaxed marker:text-teal-300/70 print:mt-1 print:space-y-0.5 print:text-[10pt] print:marker:text-slate-500">
                        {(job.highlights ?? [job.description]).map((h, j) => (
                          <li key={j}>{h}</li>
                        ))}
                      </ul>
                      {job.tags && job.tags.length > 0 && (
                        <p className="mt-2 text-sm text-slate-500 print:text-[9pt] print:text-slate-600">
                          {job.tags.map((t) => t.title).join(" · ")}
                        </p>
                      )}
                    </li>
                  ))}
                </ol>
              </section>
            ))}

          <section className="break-inside-avoid">
            <h2 className={sectionTitle}>Education &amp; certificates</h2>
            <ul className="space-y-3 print:space-y-1">
              {education.data.map((e, i) => (
                <li key={i}>
                  <span className="font-medium text-slate-200 print:text-[10pt] print:text-slate-900">
                    {e.href && isExternalUrl(e.href) ? (
                      <a
                        href={e.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-teal-300"
                      >
                        {e.title}
                      </a>
                    ) : (
                      e.title
                    )}
                  </span>
                  {e.description && (
                    <span className="block text-base print:inline print:text-[10pt] print:before:content-['_—_']">
                      {parse(e.description)}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </article>
      )}
    </div>
  );
};

export default Resume;
