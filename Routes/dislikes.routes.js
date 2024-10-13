const express = require("express");
const Dislikes = require('../controllers/dislikes.controller')

const DislikesRoute = express.Router();

DislikesRoute.post("/dislikes",Dislikes);


module.exports = DislikesRoute;