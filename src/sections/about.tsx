import parse from "html-react-parser";
import React, { useRef } from "react";
import { SectionTitle } from "../components";
import { useAboutInfomationQuery } from "../stores/services/portfolio-api";
import { useIsActiveNavigationHook } from "../hooks";

const About = () => {
  const { isLoading, isUninitialized, isError, data } =
    useAboutInfomationQuery();

  const ref = useRef(null);
  useIsActiveNavigationHook(ref, data != null);

  if (isUninitialized || isLoading) {
    return <span>loading...</span>;
  }

  if (isError) {
    return <span>some thing went wrong</span>;
  }

  const { content } = data;

  return (
    <div ref={ref} id="about" data-item="about" className="v2-section about">
      <SectionTitle title="ABOUT" />
      {parse(content)}
      <div className="mb-4 text-xl text-slate-400 hidden"></div>
    </div>
  );
};

export default About;
