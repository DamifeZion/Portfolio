import { configureStore } from "@reduxjs/toolkit";
import {menuSlice} from './features/sliceExport'

const store = configureStore({
  reducer: menuSlice.reducer,
})

export default store