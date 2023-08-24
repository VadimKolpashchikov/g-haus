import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Daum } from "@/models/productsNew";
export interface aboutState {
  favorites: any;
}

const initialState: aboutState = {
  favorites: {},
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<any>) => {
      if (Object.keys(state.favorites).includes(`${action.payload.id}`)) {
        const oldObj = { ...state.favorites };
        delete oldObj[action.payload.id];
        state.favorites = { ...oldObj };
      } else {
        state.favorites[action.payload.id] = action.payload;
      }
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "gradusFavorites",
          JSON.stringify(state.favorites)
        );
      }
    },
    removeFavorite: (state, action: PayloadAction<Daum>) => {
      const oldObj = { ...state.favorites };
      delete oldObj[action.payload.id];
      state.favorites = { ...oldObj };
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "gradusFavorites",
          JSON.stringify(state.favorites)
        );
      }
    },
    initFavorite: (state, action: PayloadAction<any>) => {
      state.favorites = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite, initFavorite } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
