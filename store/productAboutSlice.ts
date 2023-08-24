import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface aboutState {
  tabActive: number;
}

const initialState: aboutState = {
  tabActive: 0,
};

export const productAboutSlice = createSlice({
  name: "productAbout",
  initialState,
  reducers: {
    productAbout: (state, action: PayloadAction<number>) => {
      state.tabActive = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { productAbout } = productAboutSlice.actions;

export default productAboutSlice.reducer;
