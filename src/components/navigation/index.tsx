import React, { useMemo } from "react";

const Navigation = () => {
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
        <li data-item={item.href} className="nav-item active">
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
