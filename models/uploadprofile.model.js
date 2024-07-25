const mongoose = require("mongoose");
const {Schema} = mongoose

const UploadprofileSchema = new Schema({
    profile:String,
},);


const UploadProfileModel = mongoose.model('Userprofile',UploadprofileSchema);


module.exports = UploadProfileModel;