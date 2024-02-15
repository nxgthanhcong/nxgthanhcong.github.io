import React from "react";
import { Container, TagList, ViewMore } from "../components";
import { TwoOClockArrowIcon } from "../assets/icons";
import { useProjectsQuery } from "../stores/services/portfolio-api";

const Projects = () => {
  const { isLoading, isUninitialized, isError, data } = useProjectsQuery({
    page: 1,
    limit: 2,
  });

  if (isUninitialized || isLoading) {
    return <span>loading...</span>;
  }

  if (isError) {
    return <span>some thing went wrong</span>;
  }

  const projectDataItems = data;

  return (
    <Container girdColVariant="lg:grid-cols-1">
      <div className="py-12 lg:py-24">
        <ViewMore.IconLeftSide url="/" title="Home page" iconSide="left" />
        <h1 className="mt-4 text-5xl font-bold text-slate-200">All projects</h1>
        <table className="w-full mt-4">
          <thead>
            <tr className="border-b border-slate-300/10">
              <th className="text-left text-lg font-semibold text-slate-200 py-3">
                Year
              </th>
              <th className="text-left text-lg font-semibold text-slate-200">
                Project
              </th>
              <th className="hidden lg:table-cell text-left text-lg font-semibold text-slate-200">
                Made at
              </th>
              <th className="hidden lg:table-cell text-left text-lg font-semibold text-slate-200">
                Built with
              </th>
              <th className="text-left text-lg font-semibold text-slate-200">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {projectDataItems.map((item, index) => (
              <tr
                key={index}
                className="border-b border-slate-300/10 last:border-none"
              >
                <td className="text-lg text-slate-400 py-6">{item.year}</td>
                <td className="text-lg text-slate-200 font-semibold">
                  {item.title}
                </td>
                <td className="hidden lg:table-cell text-lg text-slate-400">
                  {item.madeAt}
                </td>
                <td className="hidden lg:table-cell">
                  <TagList items={item.tags} />
                </td>
                <td className="text-lg text-slate-400">
                  <span className="group flex cursor-pointer hover:text-slate-200 font-medium">
                    emersoncollective.com
                    <TwoOClockArrowIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Projects;
