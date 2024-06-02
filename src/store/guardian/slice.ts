import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";
import { getGuardianDataThunk } from "./thunks";

export interface State {
  GuardianData: any;
  showGuardian: boolean | null;
  guardianCategories: string[];
}

const initialState: State = {
  GuardianData: [],
  showGuardian: null,
  guardianCategories: [],
};

export const guardianSlice = createSlice({
  name: "guardianApi",
  initialState,
  reducers: {
    setShowGuardian: (state, action) => {
      state.showGuardian = action.payload;
    },
    setGuardianCtageories: (state, action) => {
      state.guardianCategories = action.payload;
    },
    setGuardianData: (state, action) => {
      state.GuardianData = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getGuardianDataThunk.fulfilled, (state, action) => {
      state.GuardianData = action.payload;
    });
  },
});

export const { setShowGuardian,setGuardianCtageories,setGuardianData } = guardianSlice.actions;

export const selectGuardianData = (state: ReduxState) =>
  state.guardian.GuardianData;
export const selectShowGuardian = (state: ReduxState) =>
  state.guardian.showGuardian;
export const selectGuardianCategories = (state: ReduxState) =>
  state.guardian.guardianCategories;
export default guardianSlice.reducer;
