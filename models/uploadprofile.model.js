const mongoose = require("mongoose");
const { Schema } = mongoose;

const UploadProfileSchema = new Schema({
  profile: String,
},{timestamps:true});

const UploadProfileModel = mongoose.model('UserProfile', UploadProfileSchema);

module.exports = UploadProfileModel;
