import express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import React from "react";
import { AppRouter } from "../components/Routes";

const app = express();
app.use(express.static("public"));

app.get("*", function (req, res) {
  const content = renderToString(
    <StaticRouter location={req.path}>
      <AppRouter />
    </StaticRouter>
  );

  console.log(content);

  res.send(`
    <!doctype html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>  
      </body>
    </html>
  `);
});

app.listen(3001);
console.log("Listening 3001");
