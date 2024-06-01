import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";
import { newsApiData } from "./types";
import { getNewsAPiThunk } from "./thunks";

export interface State {
  newsApiData: any;
}

const initialState: State = {
  newsApiData: [],
};

export const newsAPiSlice = createSlice({
  name: "newsApi",
  initialState,
  reducers: {
    setNewsApiData: (state, action) => {
      state.newsApiData = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getNewsAPiThunk.fulfilled, (state,action) => {
      state.newsApiData = action.payload;
    });
  },
});

export const { setNewsApiData } = newsAPiSlice.actions;

export const selectNewsApiData = (state: ReduxState) =>
  state.newsApi.newsApiData;
export default newsAPiSlice.reducer;
