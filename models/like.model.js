const mongoose = require("mongoose");
const LikeSchema = new mongoose.Schema({
    likes:{
type:String,
default:0,
    },
    likeid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Researchpaper',
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User', 
    }
},{timestamps:true});

const LikeModel = mongoose.model('like',LikeSchema);

module.exports = LikeModel;