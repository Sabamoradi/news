import { createAppAsyncThunk } from "../appAsyncThunk";
import { getGuardianData } from "./api";

export const getGuardianDataThunk = createAppAsyncThunk(
  "general/getGuardianData",
  async () => {
    const response = (await getGuardianData()).data.response.results;

    return response;
  }
);