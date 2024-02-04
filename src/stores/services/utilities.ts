import { IResponse } from "../models";

export const transformResponse = (response: IResponse) => {
  if (!response.isSucceed) {
    throw new Error("zz");
  }
  return response.data;
};
