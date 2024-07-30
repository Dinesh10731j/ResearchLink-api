const GetUserProfile = require("../controllers/getuserprofile.controller");
const express = require("express");

const UserProfileRoute = express.Router();


UserProfileRoute.get("/user-profile/:id",GetUserProfile);

module.exports = UserProfileRoute;

