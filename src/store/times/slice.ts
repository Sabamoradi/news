import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";
import { getTimesDataThunk, getTimesSearchDataThunk } from "./thunks";
import { getTimesSearchData } from "./api";

export interface State {
  timesData: any;
}

const initialState: State = {
  timesData: [],
};

export const timesSlice = createSlice({
  name: "timesApi",
  initialState,
  reducers: {
    setTimesData: (state, action) => {
      state.timesData = action.payload;
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

export const { setTimesData } = timesSlice.actions;

export const selectTimesData = (state: ReduxState) =>
  state.times.timesData;

export default timesSlice.reducer;
