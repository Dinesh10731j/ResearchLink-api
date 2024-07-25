const mongoose = require("mongoose");

const UploadprofileSchema = new mongoose.Schema({
    profile:String,
},{
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'UserModel'
    }
});


const UploadProfileModel = mongoose.model('Userprofile',UploadprofileSchema);


module.exports = UploadProfileModel;