import React from "react";
import { routes } from "../routes";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
