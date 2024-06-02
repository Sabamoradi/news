import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";

export interface State {
    searchData: string;
    allCategories:string[]
}

const initialState: State = {
  searchData: "",
  allCategories:[]
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
    setAllCategories:(state, action) => {
      state.allCategories = action.payload;
    },
  },
});

export const { setSearchData,setAllCategories } = generalSlice.actions;

export const selectSearchData = (state: ReduxState) =>
  state.general.searchData;
export const selectAllCategories = (state: ReduxState) =>
  state.general.allCategories;
export default generalSlice.reducer;
