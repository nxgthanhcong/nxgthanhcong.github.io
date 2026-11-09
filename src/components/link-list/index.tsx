import React from "react";
import parse from "html-react-parser";
import { ILink } from "../../stores/models";

const className = "flex flex-wrap gap-x-[2px] items-center";

const LinkList = ({ items }: { items?: ILink[] }) => {
  return (
    <ul className="flex my-3 flex-wrap gap-4">
      {items &&
        items.map(({ title, icon, href }, index) => {
          const content = (
            <>
              <span>{parse(icon)}</span>
              <span>{title}</span>
            </>
          );
          return (
            <li key={index} className="text-slate-400 text-base font-medium">
              {href ? (
                <a href={href} className={className}>
                  {content}
                </a>
              ) : (
                <span className={className}>{content}</span>
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default LinkList;
