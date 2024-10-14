const mongoose = require('mongoose');

const followersSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    }]
});


const followersModel = mongoose.model('Followers', followersSchema);

module.exports = followersModel;
