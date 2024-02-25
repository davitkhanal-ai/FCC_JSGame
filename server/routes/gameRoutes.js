const express = require("express");
const gameRoutes = express.Router();
// links
const home = require("../controller/mainMenu");

//routes to link
gameRoutes.get("/", home);

module.exports = gameRoutes;
