const UploadResearchPaperModel = require('../models/uploadpaper.model');

const Dislikes = async (req, res) => {
  try {
    const { paperId, userId } = req.body;

    if (!paperId || !userId) {
      return res.status(400).json({ msg: 'Missing paperId or userId' });
    }

    console.log('Received paperId:', paperId);
    console.log('Received userId:', userId);

    const paper = await UploadResearchPaperModel.findById(paperId);
    if (!paper) {
      return res.status(404).json({ msg: 'Paper not found' });
    }


    if (!Array.isArray(paper.dislikeCount)) {
      paper.dislikeCount = [];
    }

    const isDisliked = paper.dislikeCount.includes(userId);

  

    if (isDisliked) {
      paper.dislikeCount = paper.dislikeCount.filter(id => {
    
        return id.toString() !== userId.toString();
      });
    
    } else {
      paper.dislikeCount.push(userId);

    }

    await paper.save();


    return res.status(200).json({
      msg: 'Dislike action successful',
      dislikes: paper.dislikeCount,
    });

  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({
      msg: 'Internal server error',
      success: false,
      error: err?.message,
    });
  }
};

module.exports = Dislikes;
