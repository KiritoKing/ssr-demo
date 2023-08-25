import React from "react";
import App from "../components/App";
import { hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { clientStore } from "./store";

hydrateRoot(
  document.getElementById("root"),
  <Provider store={clientStore}>
    <App />
  </Provider>
);
