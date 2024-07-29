const FriendRequest = require("../controllers/friendrequest.controller");
const express = require("express");
const FriendRequestRoute = express.Router();


FriendRequestRoute.post("/send-request",FriendRequest);


module.exports = FriendRequestRoute;