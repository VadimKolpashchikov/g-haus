import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  city: string;
}

const initialState: userState = {
  city: "Киров",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userCity } = userSlice.actions;

export default userSlice.reducer;