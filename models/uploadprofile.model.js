const mongoose = require("mongoose");

const UploadprofileSchema = new mongoose.Schema({
    profile:String,
});


const UploadProfileModel = mongoose.model('Userprofile',UploadprofileSchema);


module.exports = UploadProfileModel;