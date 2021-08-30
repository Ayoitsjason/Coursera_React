const express = require("express");

const app = express();

const ownersRoutes = require("./routes/ownersRoutes.js");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/owner", ownersRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

app.listen(8000);
