const express = require("express");
const app = express();
const path = require("path");
const gameRoutes = require("./server/routes/gameRoutes");
// const expressLayouts = require("express-ejs-layouts");

// middlewares
app.use(express.urlencoded({ extended: true }));

// to router
app.use("/", gameRoutes);

//server boot
app.listen(3000, () => {
  console.log("Server is running on 3000");
});
