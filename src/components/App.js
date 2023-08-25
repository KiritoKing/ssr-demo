import React from "react";
import { routes } from "../routes";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import { getClientStore, store } from "../store";

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
};

export default App;
