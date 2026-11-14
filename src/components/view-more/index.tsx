import React from "react";
import { NineOClockArrowIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

const ViewMore: any = {};

ViewMore.IconLeftSide = (props: any) => {
  const { url, title } = props;
  return (
    <Link
      to={url}
      className="group mt-4 inline-flex items-center gap-x-1 text-lg font-medium text-white"
    >
      <NineOClockArrowIcon className="rotate-180 ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:-translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
      <span>{title}</span>
    </Link>
  );
};

ViewMore.IconRightSide = (props: any) => {
  const { url, title } = props;
  return (
    <Link
      to={url}
      className="group mt-4 inline-flex items-center gap-x-1 text-lg font-medium text-white"
    >
      <span>{title}</span>
      <NineOClockArrowIcon className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
    </Link>
  );
};

// Outlined teal call-to-action (same look as the resume page's Print button)
// for the one link we most want visitors to click.
ViewMore.Primary = (props: any) => {
  const { url, title } = props;
  return (
    <Link
      to={url}
      className="group mt-8 inline-flex items-center gap-x-2 rounded-md border border-teal-300/50 px-5 py-3 text-lg font-medium text-teal-300 transition hover:border-teal-300 hover:bg-teal-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 motion-reduce:transition-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="h-5 w-5 shrink-0"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5zM14 3v5h5M9 13h6M9 17h4"
        />
      </svg>
      <span>{title}</span>
      <NineOClockArrowIcon className="inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 motion-reduce:transition-none" />
    </Link>
  );
};

export default ViewMore;
