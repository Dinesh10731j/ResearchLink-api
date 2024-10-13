const express = require("express");
const Likes = require('../controllers/likes.controller')

const LikesRoute = express.Router();

LikesRoute.post("/likes",Likes);


module.exports = LikesRoute;