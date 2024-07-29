const ResearchLinkUsers = require('../controllers/getresearchlinkusers.controller')
const express = require("express");
const ResearchLinkUsersRoutes = express.Router();


ResearchLinkUsersRoutes.get("/users",ResearchLinkUsers);


module.exports = ResearchLinkUsersRoutes;