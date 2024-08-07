const mongoose = require("mongoose");
const DisLikeSchema = new mongoose.Schema({
    likeid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Researchpaper',
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User', 
    }
},{timestamps:true});


const DisLikeModel = mongoose.model("dislike",DisLikeSchema);


module.exports = DisLikeModel;