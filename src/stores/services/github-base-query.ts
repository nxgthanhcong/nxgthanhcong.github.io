import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query";
const apiUrl = process.env.REACT_APP_GITHUBDB_API_URL;

const staggeredBaseQuery = retry(
  fetchBaseQuery({
    baseUrl: `${apiUrl}/nxgthanhcong/nxgthanhcong.github.io/what-is-database/`,
  }),
  {
    maxRetries: 5,
  }
);

export default staggeredBaseQuery;
