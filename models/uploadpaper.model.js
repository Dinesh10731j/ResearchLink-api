const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Ttile is required"],
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
  
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  }
},{timestamps:true});

const UploadResearchPaperModel = mongoose.model("Researchpaper", UploadSchema);

module.exports = UploadResearchPaperModel;
