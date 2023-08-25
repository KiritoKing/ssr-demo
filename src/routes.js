import React from "react";
import { Route } from "react-router-dom";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import { Routes } from "react-router-dom";
import Contacts from "./components/Contacts";
import { getUserList } from "./store/slices/contacts";
import { useLoaderData } from "react-router-dom";
import { store } from "./store";

const routes = [
  {
    path: "/",
    Component() {
      return <Greeting />;
    },
  },
  {
    path: "counter",
    Component() {
      return <Counter />;
    },
  },
  {
    path: "contacts",
    async loader() {
      const dispatch = store.dispatch;
      const data = await dispatch(getUserList());
      console.log(data);
      return data.payload;
    },
    Component() {
      const loaderData = useLoaderData();
      console.log(loaderData);
      return <Contacts />;
    },
  },
];

const AppRouter = () => (
  <Routes>
    {routes.map((route) => (
      <Route path={route.path} element={route.Component} />
    ))}
  </Routes>
);

export { AppRouter, routes };
