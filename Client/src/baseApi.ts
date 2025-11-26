import { type BaseQueryApi, type FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "./uiSlice.ts";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));

const baseQuery = fetchBaseQuery({
  baseUrl: "https://localhost:7208/api",
});

const baseQueryWithDelay = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
  api.dispatch(startLoading());
  await sleep();
  const result = await baseQuery(args, api, extraOptions);
  api.dispatch(stopLoading());
  if (result.error) {
    const { status, data } = result.error;
    console.log({ status, data });
  }

  return result;
};

export { baseQueryWithDelay };
