const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

// middlewares
app.use(express.urlencoded({ extended: true }));

//server boot
app.listen(8000, () => {
  console.log("Server is running");
});
