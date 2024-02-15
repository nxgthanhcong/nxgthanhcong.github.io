import React, { useEffect, useMemo, useState } from "react";
import "./navigation.css";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";

const Navigation = () => {
  const [activedItem, setActivesItem] = useState<string>();
  const appState = useSelector((state: RootState) => state.app);
  useEffect(() => {
    setActivesItem(appState.activedNavigationItem.toLocaleLowerCase());
  }, [appState.activedNavigationItem]);

  const navigationItems = useMemo(() => {
    return [
      {
        href: "about",
        description: "about",
      },
      {
        href: "experiences",
        description: "experiences",
      },
      {
        href: "projects",
        description: "projects",
      },
    ];
  }, []);

  return (
    <ul className="mt-16 hidden lg:block" id="navigation-menu">
      {navigationItems.map((item) => (
        <li
          key={item.href}
          data-item={item.href}
          className={"nav-item " + (activedItem === item.href ? "active" : "")}
        >
          <a
            href={`#${item.href}`}
            className="inline-flex items-center gap-x-4 py-3"
          >
            <span className="nav-item__indicator inline-block h-px w-8 bg-slate-500 duration-200"></span>
            <span className="nav-item__text text-sm font-semibold uppercase tracking-widest text-slate-500 duration-200">
              {item.description}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
