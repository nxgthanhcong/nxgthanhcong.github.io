import React from "react";
import { TwoOClockArrowIcon } from "../../assets/icons";
import { isExternalUrl } from "../../utils/url";

// Item heading for experience/project/blog lists. Shows the ↗ arrow and
// becomes a link only when `href` is a real external URL.
const ItemTitle = ({
  as: Tag = "h5",
  title,
  href,
  className = "text-xl font-medium text-slate-200",
}: {
  as?: "h5" | "h6";
  title: React.ReactNode;
  href?: string;
  className?: string;
}) => {
  if (!isExternalUrl(href)) {
    return <Tag className={className}>{title}</Tag>;
  }
  return (
    <Tag className={className}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#71e4d0] focus-visible:text-[#71e4d0]"
      >
        {title}
        <TwoOClockArrowIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
      </a>
    </Tag>
  );
};

export default ItemTitle;
