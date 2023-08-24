import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Daum } from "@/models/productsNew";
export interface basketState {
  basket: any;
  currentProduct: any;
}

const initialState: basketState = {
  basket: {},
  currentProduct: {},
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<any>) => {
      if (Object.keys(state.basket).includes(`${action.payload.id}`)) {
        const oldObj = { ...state.basket };
        delete oldObj[action.payload.id];
        state.basket = { ...oldObj };
      } else {
        state.basket[action.payload.id] = action.payload;
        state.currentProduct = action.payload;
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("gradusBasket", JSON.stringify(state.basket));
      }
    },
    removeToBasket: (state, action: PayloadAction<Daum>) => {
      const oldObj = { ...state.basket };
      delete oldObj[action.payload.id];
      state.basket = { ...oldObj };
      if (typeof window !== "undefined") {
        localStorage.setItem("gradusBasket", JSON.stringify(state.basket));
      }
    },
    changeQuantity: (state, action: PayloadAction<any>) => {
      const oldObj = { ...state.basket };
      oldObj[action.payload.id].quantity = action.payload.q;
      state.basket = { ...oldObj };
      if (typeof window !== "undefined") {
        localStorage.setItem("gradusBasket", JSON.stringify(state.basket));
      }
    },
    clearBasket: (state) => {
      state.basket = {};
    },
    initBasket: (state, action: PayloadAction<any>) => {
      state.basket = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToBasket,
  removeToBasket,
  initBasket,
  clearBasket,
  changeQuantity,
} = basketSlice.actions;

export default basketSlice.reducer;
