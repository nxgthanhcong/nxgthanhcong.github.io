import React from "react";
import parse from "html-react-parser";

const LinkList = ({ items }: { items: any }) => {
  return (
    <ul className="flex my-3 flex-wrap gap-4">
      {items &&
        items.map(
          ({ title, icon }: { title: string; icon: string }, index: number) => (
            <li key={index} className="text-slate-400 text-base font-medium">
              <a href="/" className="flex flex-wrap gap-x-[2px] items-center">
                <span>{parse(icon)}</span>
                <span>{title}</span>
              </a>
            </li>
          )
        )}
    </ul>
  );
};

export default LinkList;
