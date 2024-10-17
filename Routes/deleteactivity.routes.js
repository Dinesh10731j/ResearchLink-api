const express = require("express");
const deleteActivity = require("../controllers/deleteactivity.controller");
const deleteActivityRoute = express.Router();

deleteActivityRoute.delete("/delete-activity/:activityId", deleteActivity);

module.exports = deleteActivityRoute;
