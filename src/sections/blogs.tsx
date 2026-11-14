import React, { useRef, useState } from "react";
import {
  ItemTitle,
  SectionError,
  SectionSkeleton,
  SectionTitle,
} from "../components";
import { useIsActiveNavigationHook } from "../hooks";
import { useBlogsQuery } from "../stores/services/portfolio-api";

const BlogsSection = () => {
  const [activedIndex, setActivedIndex] = useState(-1);

  const { isLoading, isUninitialized, isError, data } = useBlogsQuery({
    page: 1,
    limit: 2,
  });

  const ref = useRef(null);
  useIsActiveNavigationHook(ref, data != null);

  if (isUninitialized || isLoading) {
    return <SectionSkeleton lines={3} />;
  }

  if (isError) {
    return <SectionError />;
  }

  const blogDataItems = data ?? [];

  // No posts yet: say so instead of showing placeholder articles. Adding
  // entries to public/data/get-blogs.json brings the list back.
  if (blogDataItems.length === 0) {
    return (
      <div ref={ref} id="blogs" data-item="blogs" className="v2-section mt-32">
        <SectionTitle title="BLOGS" />
        <div className="rounded-lg border border-dashed border-slate-300/20 p-6 lg:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium text-teal-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-teal-300" aria-hidden="true" />
            Coming soon
          </span>
          <p className="mt-4 text-lg text-slate-400">
            I’m writing up notes from real projects:{" "}
            <span className="font-medium text-slate-200">
              SQL performance, system integration, and building with Claude Code
            </span>
            . The first posts are on the way.
          </p>
        </div>
      </div>
    );
  }

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
                className="h-[68px] w-[120px] object-cover bg-[rgba(255, 255, 255, 0.15)] rounded border-2 border-solid border-[rgba(255,255,255,0.1)]"
                src={item.imgUrl}
                width="120px"
                height="68px"
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
    </div>
  );
};

export default BlogsSection;
