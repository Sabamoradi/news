import { createAppAsyncThunk } from "../appAsyncThunk";
import { getNewsApiData } from "./api";

export const getNewsAPiThunk = createAppAsyncThunk(
  "general/getNewsApiData",
  async () => {
    const response = (await getNewsApiData()).data;
    return response;
  }
);