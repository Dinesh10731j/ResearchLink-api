const UploadResearchPaperModel = require("../models/uploadpaper.model");

const GetResearchPaper = async (req, res) => {
    try {
        const ResearchPapers = await UploadResearchPaperModel.find({});
        if (ResearchPapers.length === 0) {
            return res.status(404).json({ msg: "Research papers not found", success: false });
        }

        return res.status(200).json({ msg: "Research paper fetch successfully", success: true, data: ResearchPapers });

    } catch (err) {
        res.status(500).json({ msg: 'Internal server error', success: false, error: err.message });
    }
}

module.exports = GetResearchPaper;
