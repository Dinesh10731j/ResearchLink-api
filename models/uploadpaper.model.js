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
    required: [true, "Description is required"],
  },
});

const UploadResearchPaperModel = mongoose.model("Researchpaper", UploadSchema);

module.exports = UploadResearchPaperModel;
