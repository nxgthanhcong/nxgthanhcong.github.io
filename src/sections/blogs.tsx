import React, { useRef, useState } from "react";
import { ItemTitle, SectionTitle, ViewMore } from "../components";
import { useIsActiveNavigationHook } from "../hooks";
import { useBlogsQuery } from "../stores/services/github-portfolio-api";

const BlogsSection = () => {
  const [activedIndex, setActivedIndex] = useState(-1);

  const { isLoading, isUninitialized, isError, data } = useBlogsQuery({
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

  const blogDataItems = data;

  return (
    <div ref={ref} id="blogs" data-item="blogs" className="v2-section mt-32">
      <SectionTitle title="BLOGS" />
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
              <h5 className="text-normal font-medium text-slate-400">
                {item.createDate}
              </h5>
              <ItemTitle as="h6" title={item.title} href={item.href} />
            </div>
          </li>
        ))}
      </ul>
      <ViewMore.IconRightSide url="/" title="View all blogs" />
    </div>
  );
};

export default BlogsSection;
