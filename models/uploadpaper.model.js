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
  }
});

const UploadResearchPaperModel = mongoose.model("Researchpaper", UploadSchema);

module.exports = UploadResearchPaperModel;
