import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./base-query";
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
      query: () => `portfolio/get-current-job-infomation`,
      transformResponse,
    }),
    aboutInfomation: build.query<IAboutInfomation, void>({
      query: () => `portfolio/get-about-infomation`,
      transformResponse,
    }),
    experiences: build.query<IExperience[], void>({
      query: () => `portfolio/get-experiences`,
      transformResponse,
    }),
    projects: build.query<IProject[], { page: number; limit: number }>({
      query: ({ page, limit }) => {
        return {
          url: `portfolio/get-projects`,
          params: {
            page,
            limit,
          },
        };
      },

      transformResponse,
    }),
    blogs: build.query<IBlog[], { page: number; limit: number }>({
      query: ({ page, limit }) => {
        return {
          url: `portfolio/get-blogs`,
          params: {
            page,
            limit,
          },
        };
      },

      transformResponse,
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
