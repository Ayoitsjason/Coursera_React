const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const ownersRoutes = require("./routes/ownersRoutes.js");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use(bodyParser.json());

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
