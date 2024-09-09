import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import SignInForm from "../../components/signInForm";

type modalContentState = {
  component: React.FC | null;
};

const initialState: modalContentState = {
  component: SignInForm,
};

const modalContentSlice = createSlice({
  name: "modalContent",
  initialState,
  reducers: {
    setContent(state, action: PayloadAction<React.FC>) {
      state.component = action.payload;
    },
    clearContent(state) {
      state.component = null;
    },
    logState(state) {
      console.log(state.component?.name);
      console.log("logState executed");
    },
  },
});

export const { setContent, clearContent, logState } = modalContentSlice.actions;

export default modalContentSlice.reducer;
