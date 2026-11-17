import React from "react";
import "./navigation.css";
import { useActiveSection } from "../../hooks";

const NAVIGATION_ITEMS = ["about", "experiences", "projects", "blogs"];

const Navigation = () => {
  const activeItem = useActiveSection(NAVIGATION_ITEMS);

  return (
    <ul className="mt-16 hidden lg:block lg:short:mt-8" id="navigation-menu">
      {NAVIGATION_ITEMS.map((item) => (
        <li
          key={item}
          data-item={item}
          className={"nav-item " + (activeItem === item ? "active" : "")}
        >
          <a
            href={`#${item}`}
            className="inline-flex items-center gap-x-4 py-3"
            aria-current={activeItem === item ? "location" : undefined}
          >
            <span className="nav-item__indicator inline-block h-px w-8 bg-slate-500 transition-all duration-200"></span>
            <span className="nav-item__text text-sm font-semibold uppercase tracking-widest text-slate-400 transition-colors duration-200">
              {item}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
