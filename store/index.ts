import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import getModals from "./getModals";
import userSlice from "./userSlice";
import productAboutSlice from "./productAboutSlice";
import { gradusApi } from "./api";
import headerSlice from "./headerSlice";
import favoritesSlice from "./favoritesSlice";
import basketSlice from "./basketSlice";
export const store = configureStore({
  reducer: {
    // [gradusApi.reducerPath]: gradusApi.reducer,
    modals: getModals,
    user: userSlice,
    header: headerSlice,
    favorites: favoritesSlice,
    basket: basketSlice,
    productAbout: productAboutSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // .concat(gradusApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
