import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/Counter";
import contactsReducer from "./slices/contacts";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    contacts: contactsReducer,
  },
  devTools: true,
});

export const getClientStore = configureStore({
  reducer: {
    counter: counterReducer,
    contacts: contactsReducer,
  },
  // preloadedState: JSON.parse(global.INITIAL_STATE || ""),
  devTools: true,
});
