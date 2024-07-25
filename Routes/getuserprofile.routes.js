const GetUserProfile = require("../controllers/getuserprofile");
const express = require("express");
const UserProfileRoute = express.Router();

UserProfileRoute.get("/profile/:userprofile",GetUserProfile);


module.exports = UserProfileRoute;