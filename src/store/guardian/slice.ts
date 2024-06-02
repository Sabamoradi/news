import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";
import { getGuardianDataThunk } from "./thunks";
import { GuardianData } from "./types";

export interface State {
  GuardianData: GuardianData[];
  showGuardian: boolean | null;
  guardianCategories: string[];
  guardianSkeleton:boolean
}

const initialState: State = {
  GuardianData: [],
  showGuardian: null,
  guardianCategories: [],
  guardianSkeleton:false
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
    builder.addCase(getGuardianDataThunk.pending, (state, action) => {
      state.guardianSkeleton = true;
    });
    builder.addCase(getGuardianDataThunk.fulfilled, (state, action) => {
      state.GuardianData = action.payload;
      state.guardianSkeleton = false;
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
export const selectGuardianSkeleton = (state: ReduxState) =>
  state.guardian.guardianSkeleton;
export default guardianSlice.reducer;
