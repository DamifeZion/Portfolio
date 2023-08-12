import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.toggle = !state.toggle;
    },
  },
});

export default themeSlice;
