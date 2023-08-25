import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/slices/counter";
import contactsReducer from "../store/slices/contacts";

export const clientStore = configureStore({
  reducer: {
    counter: counterReducer,
    contacts: contactsReducer,
  },
  preloadedState: window.INITIAL_STATE,
  devTools: true,
});
