const express = require("express");
const  countViews = require("../controllers/countViews.controller");

const countViewsRoute = express.Router();

countViewsRoute.get("/views/:researchPaperId",countViews);



module.exports = countViewsRoute;