const UserActivities = require("../controllers/useractivities.controller");

const express = require("express");
const UserActivitiesRoute = express.Router();

UserActivitiesRoute.get("/user-activities/:userid", UserActivities);

module.exports = UserActivitiesRoute;
