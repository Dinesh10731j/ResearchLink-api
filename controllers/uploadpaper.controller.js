const UploadResearchPaperModel = require("../models/uploadpaper.model");
const UploadPaper = async (req, res) => {
  try {
    const { title, description, file,userId} = req.body;
    await UploadResearchPaperModel.create({
      title: title,
      description: description,
      researchpaper: file,
      userId:userId
     
    });

    res
      .json(201)
      .json({ msg: "Research paper uploaded successfully!", success: true });
  } catch (err) {
    res.status(500).json({ msg: "Internal server error", success: false });
  }
};

module.exports = UploadPaper;
