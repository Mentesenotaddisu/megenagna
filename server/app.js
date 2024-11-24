const express = require("express");
const bodyParser = require("body-parser");
const eventsRouter = require("./routs/eventsroute");
const usersRouter = require("./routs/userroutes");
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
//mounting routes
app.use("/api/v1/events", eventsRouter);
app.use("/api/v1/users", usersRouter);
module.exports = app;
