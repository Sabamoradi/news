import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";
import { getGuardianDataThunk } from "./thunks";

export interface State {
    GuardianData: any;
    showGuardian:boolean | null
}

const initialState: State = {
  GuardianData: [],
  showGuardian:null
};

export const guardianSlice = createSlice({
  name: "guardianApi",
  initialState,
  reducers: {
    setShowGuardian: (state, action) => {
      state.showGuardian = action.payload;
      console.log(state.showGuardian);
      
    },
  },
  extraReducers(builder) {
    builder.addCase(getGuardianDataThunk.fulfilled, (state,action) => {
      state.GuardianData = action.payload;
    });
  },
});


export const { setShowGuardian } = guardianSlice.actions;

export const selectGuardianData = (state: ReduxState) =>
  state.guardian.GuardianData;
export const selectShowGuardian = (state: ReduxState) =>
  state.guardian.showGuardian;
export default guardianSlice.reducer;
