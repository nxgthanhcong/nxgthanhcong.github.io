import React from "react";

const TagList = ({ items }: { items: any }) => {
  return (
    <ul className="my-3 flex flex-wrap gap-2 ">
      {items &&
        items.map(
          (
            { title, link }: { title: string; link: string | null },
            index: number
          ) => (
            <li key={index}>
              <a
                href={link ? link : "/"}
                className="flex items-center rounded-full bg-[rgba(255,255,255,0.08)] px-3 py-1 text-sm font-normal text-[#71e4d0]"
              >
                {title}
              </a>
            </li>
          )
        )}
    </ul>
  );
};

export default TagList;
