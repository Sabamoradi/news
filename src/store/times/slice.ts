import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";
import { getTimesDataThunk, getTimesSearchDataThunk } from "./thunks";
import { getTimesSearchData } from "./api";
import { TimesData } from "./types";

export interface State {
  timesData: TimesData[];
  showTimes:boolean | null
}

const initialState: State = {
  timesData: [],
  showTimes:null
};

export const timesSlice = createSlice({
  name: "timesApi",
  initialState,
  reducers: {
    setTimesData: (state, action) => {
      state.timesData = action.payload;
    },
    setShowTimes: (state, action) => {
      state.showTimes = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getTimesDataThunk.fulfilled, (state, action) => {
      state.timesData = action.payload;
    });
    builder.addCase(getTimesSearchDataThunk.fulfilled, (state, action) => {
      state.timesData = action.payload;
    });
  },
});

export const { setTimesData , setShowTimes } = timesSlice.actions;

export const selectTimesData = (state: ReduxState) =>
  state.times.timesData;
export const selectShowTimes = (state: ReduxState) =>
  state.times.showTimes;

export default timesSlice.reducer;
