import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  activeModal: string;
}

const initialState: ModalState = {
  activeModal: "",
};

export const getModals = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.activeModal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal } = getModals.actions;

export default getModals.reducer;
