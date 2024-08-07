const UserLikes = require("../controllers/like.controller");
const express = require("express");

const LikesRoutes = express.Router();
LikesRoutes.post("/likes", UserLikes);

module.exports = LikesRoutes;
