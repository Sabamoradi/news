import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";
import { newsApiData } from "./types";
import { getNewsAPiSearchThunk, getNewsAPiThunk } from "./thunks";

export interface State {
  newsApiData: any;
  newsApiSearch:any
}

const initialState: State = {
  newsApiData: [],
  newsApiSearch:[]
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
    builder.addCase(getNewsAPiSearchThunk.fulfilled, (state,action) => {
      state.newsApiData = action.payload;
    });
  },
});

export const { setNewsApiData } = newsAPiSlice.actions;

export const selectNewsApiData = (state: ReduxState) =>
  state.newsApi.newsApiData;
export const selectNewsApiSearchData = (state: ReduxState) =>
  state.newsApi.newsApiSearch;
export default newsAPiSlice.reducer;
