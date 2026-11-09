import React from "react";
import { ITag } from "../../stores/models";

const className =
  "flex items-center rounded-full bg-[rgba(255,255,255,0.08)] px-3 py-1 text-sm font-normal text-[#71e4d0]";

const TagList = ({ items }: { items?: ITag[] }) => {
  return (
    <ul className="my-3 flex flex-wrap gap-2 ">
      {items &&
        items.map(({ title, href }, index) => (
          <li key={index}>
            {href ? (
              <a href={href} className={className}>
                {title}
              </a>
            ) : (
              <span className={className}>{title}</span>
            )}
          </li>
        ))}
    </ul>
  );
};

export default TagList;
