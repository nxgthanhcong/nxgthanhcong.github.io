import React, { useState } from "react";
import { TwoOClockArrowIcon } from "../assets/icons";
import { ViewMore } from "../components";
import { useBlogsQuery } from "../stores/services/portfolio-api";

const BlogsSection = () => {
  const [activedIndex, setActivedIndex] = useState(-1);

  const { isLoading, isUninitialized, isError, data } = useBlogsQuery({
    page: 1,
    limit: 2,
  });

  if (isUninitialized || isLoading) {
    return <span>loading...</span>;
  }

  if (isError) {
    return <span>some thing went wrong</span>;
  }

  const blogDataItems = data;

  return (
    <div className="mt-32">
      <h1 className="section__title">Blogs</h1>
      <ul id="blog-list">
        {blogDataItems.map((item, index) => (
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
                width="120px"
                alt=""
              />
            </div>
            <div className="col-span-6 -order-1 lg:order-none">
              <h5 className="text-normal font-medium text-slate-500">
                {item.createDate}
              </h5>
              <h6 className="text-xl font-medium text-slate-200">
                {item.title}
                <TwoOClockArrowIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
              </h6>
            </div>
          </li>
        ))}
      </ul>
      <ViewMore.IconRightSide url="/" title="View full blóg" />
    </div>
  );
};

export default BlogsSection;
