const UploadResearchPaperModel = require("../models/uploadpaper.model");
const UploadPaper = async (req, res) => {
  try {
    const { title, description, file } = req.body;
    await UploadResearchPaperModel.create({
      title: title,
      description: description,
      researchpaper: file,
    });

    res
      .status(201)
      .send({ msg: "Research paper uploaded successfully!", success: true });
  } catch (err) {
    res.status(500).send({ msg: "Internal server error", success: false });
  }
};

module.exports = UploadPaper;
