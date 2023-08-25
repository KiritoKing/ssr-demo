import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/Counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true,
});
