import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./github-base-query";
import { transformResponse } from "./utilities";
import {
  IAboutInfomation,
  ICurrentJobInfomation,
  IProject,
  IBlog,
} from "../models";
import IExperience from "../models/experiences";

const api = createApi({
  baseQuery,
  endpoints: (build) => ({
    currentJobInfomation: build.query<ICurrentJobInfomation, void>({
      query: () => `get-current-job-infomation.json`,
    }),
    aboutInfomation: build.query<IAboutInfomation, void>({
      query: () => `get-about-infomation.json`,
    }),
    experiences: build.query<IExperience[], void>({
      query: () => `get-experiences.json`,
    }),
    projects: build.query<IProject[], { page: number; limit: number }>({
      query: ({ page, limit }) => {
        return {
          url: `get-projects.json`,
          params: {
            page,
            limit,
          },
        };
      },
    }),
    blogs: build.query<IBlog[], { page: number; limit: number }>({
      query: ({ page, limit }) => {
        return {
          url: `get-blogs.json`,
          params: {
            page,
            limit,
          },
        };
      },
    }),
  }),
});

export const {
  useCurrentJobInfomationQuery,
  useAboutInfomationQuery,
  useExperiencesQuery,
  useProjectsQuery,
  useBlogsQuery,
} = api;
export default api;
