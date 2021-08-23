const express = require("express");
const http = require("http");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

http.createServer(app).listen(8000);
