import React from "react";
import parse from "html-react-parser";
import { ItemTitle, SectionSkeleton, SectionTitle } from "../components";
import { useEducationQuery } from "../stores/services/portfolio-api";

const Education = () => {
  const { isLoading, isUninitialized, isError, data } = useEducationQuery();

  if (isUninitialized || isLoading) {
    return <SectionSkeleton lines={2} />;
  }

  if (isError || data.length === 0) {
    return null;
  }

  return (
    <div id="education" className="v2-section mt-32">
      <SectionTitle title="EDUCATION" />
      <ul id="education-list">
        {data.map((item, index) => (
          <li
            key={index}
            className="grid gap-x-8 gap-y-2 mb-12 lg:mb-4 lg:grid-cols-8 lg:p-4"
          >
            <div className="lg:col-span-2">
              <h3 className="text-sm font-medium text-slate-400">
                {item.kind.toUpperCase()}
              </h3>
            </div>
            <div className="lg:col-span-6">
              <ItemTitle title={item.title} href={item.href} />
              {item.description && (
                <p className="mt-3 text-lg leading-5 text-slate-400">
                  {parse(item.description)}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
