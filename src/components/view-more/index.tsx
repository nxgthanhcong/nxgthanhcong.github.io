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

// Filled call-to-action for the one link we most want visitors to click.
ViewMore.Primary = (props: any) => {
  const { url, title } = props;
  return (
    <Link
      to={url}
      className="group mt-6 inline-flex items-center gap-x-2 rounded-full bg-teal-300 px-6 py-3 text-lg font-semibold text-slate-900 shadow-[0_0_24px_rgba(94,234,212,0.35)] transition hover:bg-teal-200 hover:shadow-[0_0_32px_rgba(94,234,212,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 motion-reduce:transition-none"
    >
      <span>{title}</span>
      <NineOClockArrowIcon className="inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 motion-reduce:transition-none" />
    </Link>
  );
};

export default ViewMore;
