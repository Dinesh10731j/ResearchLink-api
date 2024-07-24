const UploadPaper = require("../controllers/uploadpaper.controller");
const express = require("express");
const UploadPaperRoute = express.Router();
UploadPaperRoute.post("/upload-paper", UploadPaper);

module.exports = UploadPaperRoute;
