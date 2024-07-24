const UploadProfile = require("../controllers/uploadprofile.controller");
const express = require("express");

const UploadProfileRoute = express.Router();

UploadProfileRoute.post("/upload-image",UploadProfile);


module.exports = UploadProfileRoute;