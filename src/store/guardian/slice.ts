import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";
import { getGuardianDataThunk } from "./thunks";

export interface State {
    GuardianData: any;
}

const initialState: State = {
  GuardianData: [],
};

export const guardianSlice = createSlice({
  name: "guardianApi",
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder.addCase(getGuardianDataThunk.fulfilled, (state,action) => {
      state.GuardianData = action.payload;
    });
  },
});



export const selectGuardianData = (state: ReduxState) =>
  state.guardian.GuardianData;
export default guardianSlice.reducer;
