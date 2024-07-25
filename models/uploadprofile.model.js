const mongoose = require("mongoose");
const {Schema} = mongoose

const UploadprofileSchema = new Schema({
    profile:String,
},{
    user: [{ type: Schema.Types.ObjectId,ref:'User' }],
        
    
});


const UploadProfileModel = mongoose.model('Userprofile',UploadprofileSchema);


module.exports = UploadProfileModel;