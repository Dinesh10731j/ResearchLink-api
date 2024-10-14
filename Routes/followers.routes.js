const express = require("express");
const Followers = require("../controllers/followers.controller");
const followerRoute = express.Router();

followerRoute.route('/followers',Followers);


module.exports = followerRoute;