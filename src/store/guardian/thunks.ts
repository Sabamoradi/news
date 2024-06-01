import { createAppAsyncThunk } from "../appAsyncThunk";
import { getGuardianData } from "./api";

export const getGuardianDataThunk = createAppAsyncThunk(
  "general/getGuardianData",
  async (data?:string) => {
    const response = (await getGuardianData(data)).data.response.results;

    return response;
  }
);