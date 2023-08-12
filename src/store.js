import { configureStore } from "@reduxjs/toolkit";
import { menuSlice, themeSlice } from "./features/sliceExport";

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export default store;
