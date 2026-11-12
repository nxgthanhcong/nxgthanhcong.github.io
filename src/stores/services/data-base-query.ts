import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query";

// Site content lives in public/data/*.json on master and is served next to
// the app (https://nxgthanhcong.github.io/data/<file>.json).
const staggeredBaseQuery = retry(
  fetchBaseQuery({
    baseUrl: `${process.env.PUBLIC_URL}/data/`,
  }),
  {
    maxRetries: 5,
  }
);

export default staggeredBaseQuery;
