const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(express.static(__dirname + "/public"));

// to get from routers
const gameRoutes = require("./server/routes/gameRoutes");
app.get("/", gameRoutes);

// to layouts
app.set("layout", path.join(__dirname, "views/layouts/main.ejs"));
app.set("view engine", "ejs");

//server boot
app.listen(8000, () => {
  console.log("Server is running");
});
