const express = require("express");
const likesDislikes = require('../controllers/likedislike.controller')

const LikesDislikeRoute = express.Router();

LikesDislikeRoute.post("/likes-dislikes",likesDislikes);


module.exports = LikesDislikeRoute;