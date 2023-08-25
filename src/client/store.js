import counterReducer from "../store/slices/counter";
import contactsReducer from "../store/slices/contacts";

export const clientStore = configureStore({
  reducer: {
    counter: counterReducer,
    contacts: contactsReducer,
  },
  preloadedState: JSON.parse(window.INITIAL_STATE || ""),
  devTools: true,
});
