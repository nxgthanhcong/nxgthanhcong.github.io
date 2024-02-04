import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./base-query";
import { transformResponse } from "./utilities";

interface ICurrentJobInfomation {
  role: string;
  company: string;
  description: string;
}

const api = createApi({
  baseQuery,
  endpoints: (build) => ({
    currentJobInfomation: build.query<ICurrentJobInfomation, void>({
      query: () => `portfolio/get-current-job-infomation`,
      transformResponse,
    }),
  }),
});

export const { useCurrentJobInfomationQuery } = api;
export default api;
