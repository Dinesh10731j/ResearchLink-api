const UserLogin = require("../controllers/login.controller");
const express = require("express");


const LoginRoute = express.Router();
LoginRoute.post("/auth/login",UserLogin);

module.exports = LoginRoute;
