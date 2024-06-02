import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";
import { NewsApiData } from "./types";
import { getNewsAPiSearchThunk, getNewsAPiThunk } from "./thunks";

export interface State {
  newsApiData: NewsApiData[];
  newsApiSearch:NewsApiData[];
  showNewsOrg:boolean | null
}

const initialState: State = {
  newsApiData: [],
  newsApiSearch:[],
  showNewsOrg:null
};

export const newsAPiSlice = createSlice({
  name: "newsApi",
  initialState,
  reducers: {
    setNewsApiData: (state, action) => {
      state.newsApiData = action.payload;
    },
    setShowNewsOrg: (state, action) => {
      state.showNewsOrg = action.payload;
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

export const { setNewsApiData,setShowNewsOrg } = newsAPiSlice.actions;

export const selectNewsApiData = (state: ReduxState) =>
  state.newsApi.newsApiData;
export const selectNewsApiSearchData = (state: ReduxState) =>
  state.newsApi.newsApiSearch;
export const selectShowNewsOrg = (state: ReduxState) =>
  state.newsApi.showNewsOrg;
export default newsAPiSlice.reducer;
