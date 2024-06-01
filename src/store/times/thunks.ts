import { createAppAsyncThunk } from "../appAsyncThunk";
import { getTimesData, getTimesSearchData } from "./api";

export const getTimesDataThunk = createAppAsyncThunk(
  "times/getTimesData",
  async () => {
    const response = (await getTimesData()).data.results;
    return response;
  }
);

export const getTimesSearchDataThunk = createAppAsyncThunk(
  "times/getTimesSearchData",
  async (data:string) => {
    const response = (await getTimesSearchData(data)).data.results;
    return response;
  }
);