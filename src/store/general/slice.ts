import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";

export interface State {
    searchData: string;
}

const initialState: State = {
  searchData: "",
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
  
});

export const { setSearchData } = generalSlice.actions;

export const selectSearchData = (state: ReduxState) =>
  state.general.searchData;
export default generalSlice.reducer;
