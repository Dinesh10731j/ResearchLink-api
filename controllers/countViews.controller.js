const UploadResearchPaperModel = require("../models/uploadpaper.model");

const countViews = async (req, res) => {
    try {

        const { researchPaperId } = req.params;


        if(!researchPaperId){
            return res.status(400).json({message:'ResearchPaperId not found',success:false});
        }


        const paper = await UploadResearchPaperModel.findByIdAndUpdate(researchPaperId,
            { $inc: { views: 1 } },
            { new: true }
        );


        if (!paper) {
            return res.status(404).json({ msg: 'ResearchPaper not found', success: false });
        }

        res.json({ researchPaperInfo: paper, msg: 'researchPaperInfo fetch successfully', success: true });


    } catch (error) {
        res.status(500).json({ msg: "Internal server error", success: false, error: error?.message });
    }
}



module.exports = countViews