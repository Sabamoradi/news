import { createAppAsyncThunk } from "../appAsyncThunk";
import { getNewsApiData, getsearchData } from "./api";

export const getNewsAPiThunk = createAppAsyncThunk(
  "newApi/getNewsApiData",
  async () => {
    const response = (await getNewsApiData()).data.articles;
    return response;
  }
);

export const getNewsAPiSearchThunk = createAppAsyncThunk(
  "newApi/getsearchData",
  async (data:string) => {
    
    const response = (await getsearchData(data)).data.articles;
    console.log(response);
    return response;
  }
);