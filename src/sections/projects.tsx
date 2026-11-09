import React, { useRef, useState } from "react";
import {
  ItemTitle,
  LinkList,
  SectionTitle,
  TagList,
  ViewMore,
} from "../components";
import { useProjectsQuery } from "../stores/services/github-portfolio-api";
import { useIsActiveNavigationHook } from "../hooks";

const Projects = () => {
  const [activedIndex, setActivedIndex] = useState(-1);

  const { isLoading, isUninitialized, isError, data } = useProjectsQuery({
    page: 1,
    limit: 2,
  });

  const ref = useRef(null);
  useIsActiveNavigationHook(ref, data != null);

  if (isUninitialized || isLoading) {
    return <span>loading...</span>;
  }

  if (isError) {
    return <span>some thing went wrong</span>;
  }

  const projectDataItems = data;

  return (
    <div
      ref={ref}
      id="projects"
      data-item="projects"
      className="v2-section mt-32"
    >
      <SectionTitle title="PROJECTS" />
      <ul id="project-list">
        {projectDataItems.map((item, index) => (
          <li
            key={index}
            className={
              "hightlight-item group grid lg:grid-cols-8 mb-12 lg:mb-4 gap-x-8 rounded-md lg:p-4 duration-200 lg:hover:bg-[rgba(255,255,255,0.1)] lg:hover:shadow-[-1px_1px_10px_4px_rgba(0,0,0,0.02)] lg:hover:border-t lg:hover:border-[rgba(255,255,255,0.1)] gap-y-2 " +
              (activedIndex === -1 || index === activedIndex
                ? "opacity-100"
                : "opacity-50")
            }
            onMouseEnter={() => setActivedIndex(index)}
            onMouseLeave={() => setActivedIndex(-1)}
          >
            <div className="col-span-3 lg:col-span-2">
              <img
                className="bg-[rgba(255, 255, 255, 0.15)] rounded border-2 border-solid border-[rgba(255,255,255,0.1)]"
                src={item.imgUrl}
                alt=""
                width="120px"
              />
            </div>
            <div className="col-span-6 -order-1 lg:order-none">
              <ItemTitle title={item.title} href={item.href} />
              <p className="mt-3 text-lg leading-5 text-slate-400">
                {item.description}
              </p>
              <LinkList items={item.links} />
              <TagList items={item.tags} />
            </div>
          </li>
        ))}
      </ul>
      <ViewMore.IconRightSide url="/projects" title="View all projects" />
    </div>
  );
};

export default Projects;
