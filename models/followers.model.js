const mongoose = require('mongoose');

const followersSchema = new mongoose.Schema({
    followers:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}]
});


const followersModel = mongoose.model('Followers',followersSchema);


module.exports = followersModel;