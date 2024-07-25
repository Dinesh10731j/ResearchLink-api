const GetResearchPaper = require("../controllers/getresearchpaper.controller");
const express = require("express");

const GetResearchPaperRoute = express.Router();
GetResearchPaperRoute.get("/research-papers",GetResearchPaper);


module.exports = GetResearchPaperRoute;