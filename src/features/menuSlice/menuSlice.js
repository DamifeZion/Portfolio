import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleState(state) {
      state.toggle = !state.toggle;
    },
  },
});

export default menuSlice;
