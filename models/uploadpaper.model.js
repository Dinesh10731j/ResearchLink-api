const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema(
  {
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

    publishedDate: {
      type: Date,
      default: Date.now,
    },
    likeCount: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    dislikeCount: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);



const UploadResearchPaperModel = mongoose.model("Researchpaper", UploadSchema);

module.exports = UploadResearchPaperModel;
