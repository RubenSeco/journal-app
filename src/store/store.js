import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";


export const reduxStore = configureStore({
  reducer: {

    authSlice: authSlice.reducer
  },
})

