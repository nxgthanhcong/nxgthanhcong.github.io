import React from "react";
import { Link } from "react-router-dom";
import { TwoOClockArrowIcon } from "../../assets/icons";

const docIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5zM14 3v5h5M9 13h6M9 17h4"
    />
  </svg>
);

// Card link to /resume plus a download button. The download button opens
// /resume?print=1, which brings up the print dialog ("Save as PDF").
const ResumeCta = () => (
  <div className="mt-10 flex max-w-xl gap-3">
    <Link
      to="/resume"
      className="group flex flex-1 items-center gap-4 rounded-lg bg-slate-800/50 p-3 sm:p-4 transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
    >
      <span className="flex h-12 w-12 shrink-0 items-center sm:h-14 sm:w-14 justify-center rounded-md bg-teal-400/10 text-teal-300">
        {docIcon}
      </span>
      <span className="min-w-0">
        <span className="block text-xl font-semibold text-slate-200 transition group-hover:text-teal-300">
          View full resume
        </span>
        <span className="block text-base text-slate-400">
          Print or save as PDF
        </span>
      </span>
      <TwoOClockArrowIcon
        className="ml-auto h-5 w-5 shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-300 motion-reduce:transition-none"
        aria-hidden="true"
      />
    </Link>
    <Link
      to="/resume?print=1"
      aria-label="Download resume as PDF"
      title="Download as PDF"
      className="flex w-14 shrink-0 sm:w-[4.5rem] items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 transition hover:bg-slate-800 hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14"
        />
      </svg>
    </Link>
  </div>
);

export default ResumeCta;
