import { createAppAsyncThunk } from "../appAsyncThunk";
import { getTimesData } from "./api";

export const getTimesDataThunk = createAppAsyncThunk(
  "general/getTimesData",
  async () => {
    const response = (await getTimesData()).data.results;
    return response;
  }
);