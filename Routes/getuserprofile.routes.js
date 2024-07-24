const GetUserProfile = require("../controllers/getuserprofile");
const express = require("express");
const UserProfileRoute = express.Router();

UserProfileRoute.get("/profile/:userid",GetUserProfile);


module.exports = UserProfileRoute;