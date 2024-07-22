const UserSignup = require("../controllers/signup.controller");

const express = require("express");
const UserSignupRoute = express.Router();

UserSignupRoute.post("/auth/signup",UserSignup);


module.exports = UserSignupRoute;