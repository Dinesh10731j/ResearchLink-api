const GetFriendRequest = require("../controllers/getfriendrequest.controller");
const express = require("express");
const GetFriendRequestRoute = express.Router();

GetFriendRequestRoute.get("/get-request",GetFriendRequest);


module.exports = GetFriendRequestRoute;
