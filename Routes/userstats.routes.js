const UserStats = require("../controllers/getstats.controller");
const express = require("express");

const UserStatsRoutes = express.Router();
UserStatsRoutes.get("/user-stats",UserStats);

module.exports = UserStatsRoutes;