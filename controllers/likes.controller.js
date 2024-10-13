const mongoose = require('mongoose');
const UploadResearchPaperModel = require('../models/uploadpaper.model');

const Likes = async (req, res) => {
  try {
    const { paperId, userId } = req.body;


    if (!paperId || !userId) {
      return res.status(400).json({ msg: 'Missing paperId or userId' });
    }

 
    const paper = await UploadResearchPaperModel.findById(paperId);
    if (!paper) {
      return res.status(404).json({ msg: 'Paper not found' });
    }

   
    const userObjectId = new mongoose.Types.ObjectId(userId);

  
    if (!Array.isArray(paper.likeCount)) {
      paper.likeCount = [];
    }

    const isLiked = paper.likeCount.includes(userObjectId);

    
    if (isLiked) {
      paper.likeCount = paper.likeCount.filter(id => !id.equals(userObjectId));
    } else {
      paper.likeCount.push(userObjectId);
    }

  
    await paper.save();

    return res.status(200).json({
      msg: 'Like action successful',
      likes: paper.likeCount,
    });

  } catch (err) {
    return res.status(500).json({
      msg: 'Internal server error',
      success: false,
      error: err?.message,
    });
  }
};

module.exports = Likes;
