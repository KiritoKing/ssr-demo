import React from "react";
import { Route } from "react-router-dom";
import Greeting from "./Greeting";
import Counter from "./Counter";
import { Routes } from "react-router-dom";
import Contacts from "./Contacts";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Greeting />}></Route>
    <Route path="/counter" element={<Counter />}></Route>
    <Route path="/contacts" element={<Contacts />}></Route>
  </Routes>
);

export { AppRouter };
