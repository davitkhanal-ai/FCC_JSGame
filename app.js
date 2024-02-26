const express = require("express");
const app = express();
const path = require("path");
const jwt = require("jsonwebtoken");
const db = require("./server/database/db");
const rpgRouter = require("./server/routes/routes");

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// database
require("./server/database/auth");
// to router
app.use("/", rpgRouter);

// Protected route

//server boot
app.listen(3000, () => {
  console.log("Server is running on 3000");
});
