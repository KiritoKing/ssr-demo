import React from "react";
import { Route } from "react-router-dom";
import Greeting from "./Greeting";
import Counter from "./Counter";
import { Routes } from "react-router-dom";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Greeting />}></Route>
    <Route path="/counter" element={<Counter />}></Route>
  </Routes>
);

export { AppRouter };
