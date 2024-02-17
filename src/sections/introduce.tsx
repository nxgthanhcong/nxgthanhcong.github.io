import React from "react";
import { useCurrentJobInfomationQuery } from "../stores/services/github-portfolio-api";

const Introduce = () => {
  const { isLoading, isUninitialized, isError, data } =
    useCurrentJobInfomationQuery();

  if (isUninitialized || isLoading) {
    return <span>loading...</span>;
  }

  if (isError) {
    return <span>some thing went wrong</span>;
  }

  const { role, company, description } = data;

  return (
    <>
      <h1 className="text-6xl font-bold text-slate-200">Ng Thanh Cong</h1>
      <h2 className="mt-3 text-2xl font-medium text-slate-200">
        {role} <span className="text-xl font-normal text-slate-300">at</span>{" "}
        {company}
      </h2>
      <p className="mt-4 max-w-[70%] text-xl text-slate-400">{description}</p>
    </>
  );
};

export default Introduce;
