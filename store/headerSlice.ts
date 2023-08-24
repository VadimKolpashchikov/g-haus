import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface headerState {
  searchActive: boolean;
  headerLoad: boolean;
}

const initialState: headerState = {
  searchActive: false,
  headerLoad: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    headerSearch: (state, action: PayloadAction<boolean>) => {
      state.searchActive = action.payload;
    },
    headerLoaded: (state, action: PayloadAction<boolean>) => {
      state.headerLoad = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { headerSearch, headerLoaded } = headerSlice.actions;

export default headerSlice.reducer;
