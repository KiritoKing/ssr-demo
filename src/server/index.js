import express from "express";
import { renderToString } from "react-dom/server";
import {
  StaticRouterProvider,
  createStaticHandler,
  createStaticRouter,
} from "react-router-dom/server";
import React from "react";
import { routes } from "../routes";
import { Provider } from "react-redux";
import { store } from "../store";
import createFetchRequest from "./request";
import { createRequestHandler } from "@remix-run/express"; // 这个引用不能删除

const app = express();
app.use(express.static("public"));

const handler = createStaticHandler(routes);

app.get("/favicon.ico", (req, res) => {
  res.status(404).end();
});

app.get("*", async function (req, res) {
  const fetchRequest = createFetchRequest(req); // 将express请求转化成fetch 供staticHandler.query调用
  const context = await handler.query(fetchRequest);
  const router = createStaticRouter(handler.dataRoutes, context);

  const content = renderToString(
    <Provider store={store}>
      <StaticRouterProvider router={router} context={context} />
    </Provider>
  );

  console.log(content);

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          const INIT_STATE = ${JSON.stringify(store.getState())}
          console.log(INIT_STATE)
          window.INITIAL_STATE = INIT_STATE;
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `);
});

app.listen(3001);
console.log("Listening 3001");
