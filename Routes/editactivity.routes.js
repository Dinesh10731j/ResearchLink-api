const express = require('express');
const editActivity = require('../controllers/editactivity.controller')

const editActivityRoute = express.Router();


editActivityRoute.patch("/edit-activity",editActivity);


module.exports = editActivityRoute;