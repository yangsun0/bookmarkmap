import express = require("express");
import morgan = require("morgan");

const app = express();
if (process.env["NODE_ENV"] !== "test") {
  app.use(morgan("combined"));
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
