const express = require("express");
const Followers = require("../controllers/followers.controller");
const followerRoute = express.Router();

followerRoute.post("/followers", Followers);

module.exports = followerRoute;
