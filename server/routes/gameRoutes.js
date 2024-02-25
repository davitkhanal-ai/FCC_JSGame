const express = require("express");
const gameRoutes = express.Router();
// links
const home = require("../controller/mainMenu");
const store = require("../controller/store");

//routes to link
gameRoutes.get("/", home);
gameRoutes.get("/store", store);

module.exports = gameRoutes;
