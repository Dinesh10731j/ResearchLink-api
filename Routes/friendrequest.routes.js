const FriendRequest = require("../controllers/friendrequest.controller");
const express = require("express");
const friendRequestRoute = express.Router();


friendRequestRoute.post("/send-request",FriendRequest);


module.exports = friendRequestRoute;