import parse from "html-react-parser";
import React from "react";
import { SectionError, SectionSkeleton, SectionTitle } from "../components";
import { useAboutInfomationQuery } from "../stores/services/portfolio-api";

const About = () => {
  const { isLoading, isUninitialized, isError, data } =
    useAboutInfomationQuery();

  if (isUninitialized || isLoading) {
    return <SectionSkeleton lines={4} />;
  }

  if (isError) {
    return <SectionError />;
  }

  const { content } = data;

  return (
    <div id="about" data-item="about" className="v2-section about">
      <SectionTitle title="ABOUT" />
      {parse(content)}
      <div className="mb-4 text-xl text-slate-400 hidden"></div>
    </div>
  );
};

export default About;
