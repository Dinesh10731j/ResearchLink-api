import UploadResearchPaperModel from "../models/uploadpaper.model";

const likesDislikes = async (req, res) => {
  try {
    const { paperId, userId } = req.body;

    if (!paperId || !userId) {
      return res.status(400).json({ msg: 'Missing paperId and userId' });
    }

  
    const paper = await UploadResearchPaperModel.findById(paperId);
    if (!paper) {
      return res.status(404).json({ msg: 'Paper not found' });
    }

  
    const isLiked = paper.likes.includes(userId);
    const isDisliked = paper.dislikes.includes(userId);

   
    if (isLiked) {
      
      paper.likeCount = paper.likeCount.filter((id) => id !== userId);
    } else {
     
      paper.likeCount.push(userId);

      // If the user had disliked the paper, remove them from dislikes
      if (isDisliked) {
        paper.dislikeCount = paper.dislikeCount.filter((id) => id !== userId);
      }
    }

    
    if (isDisliked && !isLiked) {
    
      paper.dislikeCount = paper.dislikeCount.filter((id) => id !== userId);
    } else if (!isLiked && !isDisliked) {
      
      paper.dislikes.push(userId);
    }

   
    await paper.save();

    return res.status(200).json({
      msg: 'Action successful',
      likes: paper.likeCount,
      dislikes: paper.dislikeCount,
    });

  } catch (err) {
    res.status(500).json({
      msg: 'Internal server error',
      success: false,
      error: err?.message,
    });
  }
};

export default likesDislikes;
