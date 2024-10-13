const mongoose = require('mongoose');
const UploadResearchPaperModel = require('../models/uploadpaper.model');

const Dislikes = async (req, res) => {
  try {
    const { paperId, userId } = req.body;

    if (!paperId || !userId) {
      return res.status(400).json({ msg: 'Missing paperId or userId' });
    }

    
    const userObjectId = mongoose.Types.ObjectId(userId);


    const paper = await UploadResearchPaperModel.findById(paperId);
    if (!paper) {
      return res.status(404).json({ msg: 'Paper not found' });
    }

    if (!Array.isArray(paper.dislikeCount)) {
      paper.dislikeCount = [];
    }

    const isDisliked = paper.dislikeCount.some(id => id.equals(userObjectId));

 
    if (isDisliked) {
      paper.dislikeCount = paper.dislikeCount.filter(id => !id.equals(userObjectId));
    } else {
      paper.dislikeCount.push(userObjectId);
    }

    
    await paper.save();

    return res.status(200).json({
      msg: 'Dislike action successful',
      dislikes: paper.dislikeCount,
    });

  } catch (err) {
    return res.status(500).json({
      msg: 'Internal server error',
      success: false,
      error: err?.message,
    });
  }
};

module.exports = Dislikes;
