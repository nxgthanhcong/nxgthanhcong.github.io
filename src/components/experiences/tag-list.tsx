import React from "react";

const TagList = ({ items }: { items: any }) => {
  return (
    <ul className="my-3 flex flex-wrap gap-2 ">
      {items.map(({ title }: { title: string }) => (
        <li className="">
          <div className="flex items-center rounded-full bg-[rgba(255,255,255,0.08)] px-3 py-1 text-sm font-normal text-[#71e4d0]">
            {title}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
