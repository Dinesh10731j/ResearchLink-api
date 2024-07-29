const mongoose = require("mongoose");

const FriendRequestSchema  = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
},{timestamps:true});


const FriendRequestModel = mongoose.model('Friendrequest',FriendRequestSchema);


module.exports = FriendRequestModel;