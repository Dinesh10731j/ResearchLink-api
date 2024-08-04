const UploadResearchPaperModel = require("../models/uploadpaper.model");
const mongoose = require('mongoose');

const UserStats = async (req, res) => {
  try {
    const { userid } = req.params;

    if (!userid) {
      return res.status(400).json({ msg: 'User ID is required', success: false });
    }

    const userStats = await UploadResearchPaperModel.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userid) } },
      {
        $group: {
          _id: {
            year: { $year: "$publishedDate" },
            month: { $month: "$publishedDate" }
          },
          count: { $sum: 1 } 
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } } 
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
