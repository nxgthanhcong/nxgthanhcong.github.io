import React, { useRef, useState } from "react";
import { TwoOClockArrowIcon } from "../assets/icons";
import { LinkList, SectionTitle, TagList, ViewMore } from "../components";
import { useIsActiveNavigationHook } from "../hooks";
import { useExperiencesQuery } from "../stores/services/github-portfolio-api";

const Experiences = () => {
  const [activedIndex, setActivedIndex] = useState(-1);
  const { isLoading, isUninitialized, isError, data } = useExperiencesQuery();

  const ref = useRef(null);
  useIsActiveNavigationHook(ref, data != null);

  if (isUninitialized || isLoading) {
    return <span>loading...</span>;
  }

  if (isError) {
    return <span>some thing went wrong</span>;
  }

  const experienceDataItems = data;

  return (
    <div
      ref={ref}
      id="experiences"
      data-item="experiences"
      className="v2-section mt-32"
    >
      <SectionTitle title="EXPERIENCES" />
      <ul id="experience-list">
        {experienceDataItems.map((item, index) => (
          <li
            key={index}
            className={
              `hightlight-item group grid lg:grid-cols-8 mb-12 lg:mb-4 gap-x-8 rounded-md lg:p-4 duration-200 
                lg:hover:bg-hoverBackground 
                lg:hover:shadow-hoverShadow 
                lg:hover:border-t 
                lg:hover:border-hoverBorder ` +
              (activedIndex === -1 || index === activedIndex
                ? "opacity-100"
                : "opacity-50")
            }
            onMouseEnter={() => setActivedIndex(index)}
            onMouseLeave={() => setActivedIndex(-1)}
          >
            <div className="lg:col-span-2">
              <h3 className="text-sm font-medium text-slate-500">
                {item.startDate.toUpperCase()} - {item.endDate.toUpperCase()}
              </h3>
            </div>
            <div className="lg:col-span-6">
              <h5 className="text-xl font-medium text-slate-200">
                {item.position} - {item.company}
                <TwoOClockArrowIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
              </h5>
              <h6 className="text-lg font-medium text-slate-500">Coder</h6>
              <p className="mt-3 text-lg leading-5 text-slate-400">
                {"" + item.description}
              </p>
              {item.links && <LinkList items={item.links} />}
              {item.tags && <TagList items={item.tags} />}
            </div>
          </li>
        ))}
      </ul>
      <ViewMore.IconRightSide url="/" title="View full résume1" />
    </div>
  );
};

export default Experiences;
