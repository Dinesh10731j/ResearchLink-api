const UserDisLikes = require("../controllers/dislike.controller");
const express = require("express");

const DisLikesRoutes = express.Router();
DisLikesRoutes.post("/dislikes", UserDisLikes);

module.exports = DisLikesRoutes;
