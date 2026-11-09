import React from "react";

const Ingredient = () => {
  return (
    <div className="mt-32 text-lg font-medium">
      <p className="text-slate-400">
        Layout inspired by{" "}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noreferrer"
          className="text-slate-200 hover:text-[#71e4d0] focus-visible:text-[#71e4d0]"
        >
          Brittany Chiang
        </a>
        &rsquo;s portfolio. Built with{" "}
        <span className="text-slate-200">React</span>,{" "}
        <span className="text-slate-200">Redux Toolkit</span> and{" "}
        <span className="text-slate-200">Tailwind CSS</span>, deployed on{" "}
        <span className="text-slate-200">GitHub Pages</span>.
      </p>
    </div>
  );
};

export default Ingredient;
