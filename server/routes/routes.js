const express = require("express");
const userRegister = require("../controllers/authUser");
const rpgRouter = express.Router();

rpgRouter.post("/register", userRegister);

module.exports = rpgRouter;
