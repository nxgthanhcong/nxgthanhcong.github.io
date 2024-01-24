import React from "react";
import parse from "html-react-parser";

const LinkList = ({ items }: { items: any }) => {
  return (
    <ul className="flex my-3 flex-wrap gap-4">
      {items.map(({ title, icon }: { title: string; icon: string }) => (
        <li className="text-slate-400 text-base font-medium flex flex-wrap gap-x-[2px] items-center">
          <span>{parse(icon)}</span>
          <span>{title}</span>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
