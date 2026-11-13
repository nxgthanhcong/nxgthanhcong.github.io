import React, { useRef, useState } from "react";
import {
  ItemTitle,
  LinkList,
  SectionTitle,
  TagList,
  ViewMore,
} from "../components";
import { useProjectsQuery } from "../stores/services/portfolio-api";
import { useIsActiveNavigationHook } from "../hooks";
import { sortByYearDesc } from "../utils/sort";

const Projects = () => {
  const [activedIndex, setActivedIndex] = useState(-1);

  const { isLoading, isUninitialized, isError, data } = useProjectsQuery({
    page: 1,
    limit: 2,
  });

  const ref = useRef(null);
  useIsActiveNavigationHook(ref, data != null);

  if (isUninitialized || isLoading) {
    return <span>loading...</span>;
  }

  if (isError) {
    return <span>some thing went wrong</span>;
  }

  const projectDataItems = sortByYearDesc(data);

  return (
    <div
      ref={ref}
      id="projects"
      data-item="projects"
      className="v2-section mt-32"
    >
      <SectionTitle title="PROJECTS" />
      <ul id="project-list">
        {projectDataItems.map((item, index) => (
          <li
            key={index}
            className={
              "hightlight-item group grid lg:grid-cols-8 mb-12 lg:mb-4 gap-x-8 rounded-md lg:p-4 duration-200 lg:hover:bg-[rgba(255,255,255,0.1)] lg:hover:shadow-[-1px_1px_10px_4px_rgba(0,0,0,0.02)] lg:hover:border-t lg:hover:border-[rgba(255,255,255,0.1)] gap-y-2 " +
              (activedIndex === -1 || index === activedIndex
                ? "opacity-100"
                : "opacity-50")
            }
            onMouseEnter={() => setActivedIndex(index)}
            onMouseLeave={() => setActivedIndex(-1)}
          >
            <div className="col-span-3 lg:col-span-2">
              {item.imgUrl ? (
                <img
                  className="bg-[rgba(255, 255, 255, 0.15)] rounded border-2 border-solid border-[rgba(255,255,255,0.1)]"
                  src={item.imgUrl}
                  alt={`${item.title} preview`}
                  width="120px"
                />
              ) : (
                // In-house systems have no public screenshot: show a neutral
                // tile of the same size so the list stays balanced.
                <div
                  className="flex aspect-video w-[120px] flex-col items-center justify-center gap-1 rounded border-2 border-solid border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-slate-500"
                  role="img"
                  aria-label={`${item.title}: internal system, no public screenshot`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                  <span className="text-[10px] font-semibold uppercase tracking-widest">
                    Internal
                  </span>
                </div>
              )}
            </div>
            <div className="col-span-6 -order-1 lg:order-none">
              <ItemTitle title={item.title} href={item.href} />
              <p className="mt-3 text-lg leading-5 text-slate-400">
                {item.description}
              </p>
              <LinkList items={item.links} />
              <TagList items={item.tags} />
            </div>
          </li>
        ))}
      </ul>
      <ViewMore.IconRightSide url="/projects" title="View all projects" />
    </div>
  );
};

export default Projects;
