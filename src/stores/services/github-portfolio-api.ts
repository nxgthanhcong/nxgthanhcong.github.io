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
      query: () => `current-job-infomation.json`,
    }),
    aboutInfomation: build.query<IAboutInfomation, void>({
      query: () => `about-infomation`,
      transformResponse,
    }),
    experiences: build.query<IExperience[], void>({
      query: () => `experiences`,
      transformResponse,
    }),
    projects: build.query<IProject[], { page: number; limit: number }>({
      query: ({ page, limit }) => {
        return {
          url: `projects`,
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
          url: `blogs`,
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
