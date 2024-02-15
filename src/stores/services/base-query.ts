import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query";
const apiUrl = process.env.REACT_APP_API_URL;

const staggeredBaseQuery = retry(
  fetchBaseQuery({ baseUrl: `${apiUrl}/api/v1/` }),
  {
    maxRetries: 5,
  }
);

export default staggeredBaseQuery;
