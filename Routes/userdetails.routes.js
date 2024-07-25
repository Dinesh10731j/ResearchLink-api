const Userdetails = require("../controllers/userdetails.controller");

const express = require("express");


const UserDetailsRouter = express.Router();
UserDetailsRouter.get("/user-details/:userid",Userdetails);



module.exports = UserDetailsRouter;