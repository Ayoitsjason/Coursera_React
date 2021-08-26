const express = require("express");
const http = require("http");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/owner", ownersRoutes);

app.listen(8000);
