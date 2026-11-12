import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./data-base-query";
import {
  IAboutInfomation,
  ICurrentJobInfomation,
  IProject,
  IBlog,
  IEducation,
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
    education: build.query<IEducation[], void>({
      query: () => `get-education.json`,
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
  useEducationQuery,
  useProjectsQuery,
  useBlogsQuery,
} = api;
export default api;
