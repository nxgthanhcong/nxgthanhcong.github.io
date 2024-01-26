import React, { useEffect, useMemo, useState } from "react";
import "./navigation.css";

const Navigation = () => {
  const [activedItem, setActivesItem] = useState();

  useEffect(() => {
    // define an observer instance
    var observer = new IntersectionObserver(onIntersection, {
      root: null, // default is the viewport
      threshold: 0.5, // percentage of target's visible area. Triggers "onIntersection"
    });

    // callback is called on intersection change
    function onIntersection(entries: any, opts: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          const sectionInView = entry.target.getAttribute("data-item");
          setActivesItem(sectionInView);
        }
      });
    }

    const listFlagElements = [
      document.querySelector("#about.v2-section"),
      document.querySelector("#experiences.v2-section"),
      document.querySelector("#projects.v2-section"),
    ];

    // Use the observer to observe an element
    listFlagElements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      listFlagElements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

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
