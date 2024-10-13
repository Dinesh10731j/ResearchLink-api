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
    likeCount: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] },
    ],
    dislikeCount: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] },
    ],

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

UploadSchema.pre('save', async function(next) {

  this.likeCount = this.likeCount.map(id => mongoose.Types.ObjectId(id));
  this.dislikeCount = this.dislikeCount.map(id => mongoose.Types.ObjectId(id));
  next();
});

const UploadResearchPaperModel = mongoose.model("Researchpaper", UploadSchema);

module.exports = UploadResearchPaperModel;
