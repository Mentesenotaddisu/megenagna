const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config({ path: "./config.env" });

const DB = process.env.MONGODB_URI.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to MongoDB Events Cluster"))
  .catch((err) => console.log("faild to connect to MongoDB", err));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
