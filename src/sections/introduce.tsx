import React, { useState } from "react";
import parse from "html-react-parser";
import { ImageLightbox, SectionSkeleton } from "../components";
import { useCurrentJobInfomationQuery } from "../stores/services/portfolio-api";
import { displayCompany } from "../utils/text";

const Introduce = () => {
  const { isLoading, isUninitialized, isError, data } =
    useCurrentJobInfomationQuery();
  const [photoOpen, setPhotoOpen] = useState(false);

  // Photo and name are static, so they render right away; only the role and
  // description wait for the JSON (and are left out if it fails to load).
  const renderJob = () => {
    if (isUninitialized || isLoading) {
      return (
        <div className="mt-4 max-w-md lg:max-w-[70%]">
          <SectionSkeleton lines={3} />
        </div>
      );
    }
    if (isError || !data) {
      return null;
    }

    const { role, company, description } = data;
    const companyName = displayCompany(company);

    return (
      <>
        <p className="mt-3 text-2xl font-medium text-slate-200">
          {role}
          {companyName && (
            <>
              {" "}
              <span className="text-xl font-normal text-slate-300">at</span>{" "}
              {companyName}
            </>
          )}
        </p>
        <p className="mt-4 max-w-md text-xl text-slate-400 lg:max-w-[70%]">
          {parse(description)}
        </p>
      </>
    );
  };

  return (
    <>
      {/* The round avatar is a head crop; clicking it shows the full portrait. */}
      <button
        type="button"
        onClick={() => setPhotoOpen(true)}
        aria-label="View full photo"
        className="mb-6 block cursor-zoom-in rounded-full lg:short:mb-4"
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/profile.webp`}
          alt="Nguyen Thanh Cong"
          width={112}
          height={112}
          className="h-24 w-24 rounded-full object-cover ring-2 ring-slate-200/10 transition hover:ring-teal-300/60 lg:h-28 lg:w-28 lg:short:h-20 lg:short:w-20"
        />
      </button>
      {photoOpen && (
        <ImageLightbox
          src={`${process.env.PUBLIC_URL}/assets/images/profile-full.webp`}
          alt="Nguyen Thanh Cong, full photo"
          onClose={() => setPhotoOpen(false)}
        />
      )}
      <h1 className="text-6xl font-bold text-slate-200">Nguyen Thanh Cong</h1>
      {renderJob()}
    </>
  );
};

export default Introduce;
