import React from "react";
import parse from "html-react-parser";
import { useCurrentJobInfomationQuery } from "../stores/services/portfolio-api";
import { displayCompany } from "../utils/text";

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
  const companyName = displayCompany(company);

  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/profile.webp`}
        alt="Ng Thanh Cong"
        width={112}
        height={112}
        className="mb-6 h-24 w-24 rounded-full object-cover ring-2 ring-slate-200/10 lg:h-28 lg:w-28 lg:short:mb-4 lg:short:h-20 lg:short:w-20"
      />
      <h1 className="text-6xl font-bold text-slate-200">Ng Thanh Cong</h1>
      <h2 className="mt-3 text-2xl font-medium text-slate-200">
        {role}
        {companyName && (
          <>
            {" "}
            <span className="text-xl font-normal text-slate-300">at</span>{" "}
            {companyName}
          </>
        )}
      </h2>
      <p className="mt-4 max-w-md text-xl text-slate-400 lg:max-w-[70%]">{parse(description)}</p>
    </>
  );
};

export default Introduce;
