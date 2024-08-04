const UploadResearchPaperModel = require("../models/uploadpaper.model");
const mongoose = require('mongoose');

const UserStats = async (req, res) => {
  try {
    const { userid } = req.body;

    if (!userid) {
      return res.status(400).json({ msg: 'User ID is required', success: false });
    }

    // Aggregating the number of research papers published by month and year
    const userStats = await UploadResearchPaperModel.aggregate([
      { $match: { userId: mongoose.Types.ObjectId(userid) } }, // Match documents with the given user ID
      {
        $group: {
          _id: {
            year: { $year: "$publishedDate" },
            month: { $month: "$publishedDate" }
          },
          count: { $sum: 1 } // Count the number of documents
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } } // Sort by year and month
    ]);

    res.status(200).json({
      msg: 'User stats fetched successfully',
      data: userStats,
      success: true
    });
  } catch (err) {
    res.status(500).json({ msg: 'Internal server error', error: err.message, success: false });
  }
};

module.exports = UserStats;
