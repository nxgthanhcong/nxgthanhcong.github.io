import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query";

const staggeredBaseQuery = retry(
  fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1/" }),
  {
    maxRetries: 5,
  }
);

export default staggeredBaseQuery;
