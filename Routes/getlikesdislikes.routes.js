const getLikesAndDisLikes = require("../controllers/getlikesDislikes.controller");
const express = require("express");

const LikesDislikesRoutes = express.Router();

LikesDislikesRoutes.get("/getlikesdislikes/:paperId",getLikesAndDisLikes);

module.exports = LikesDislikesRoutes;

