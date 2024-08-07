const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },

  description: {
    type: String,
  },

  researchpaper: {
    type: String,
    required: [true, "Reasearchpaper is required"],
  },

  publishedDate:{
    type:Date,
    default:Date.now,
  },
  likeCount: { type: Number, default: 0 }, // Like count field
  dislikeCount: { type: Number, default: 0 }, // Dislike count field
  
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  }
},{timestamps:true});

const UploadResearchPaperModel = mongoose.model("Researchpaper", UploadSchema);

module.exports = UploadResearchPaperModel;
