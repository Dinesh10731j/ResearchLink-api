const UserLogin = require("../controllers/login.controller");
const express = require("express");
const VerifyToken = require("../middleware/verifytoken")

const LoginRoute = express.Router();
LoginRoute.post("/auth/login",VerifyToken ,UserLogin);

module.exports = LoginRoute;
