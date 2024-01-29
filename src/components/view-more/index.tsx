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

export default ViewMore;
