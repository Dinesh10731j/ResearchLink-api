const UserModel = require("../models/signup.model");
const ResearchLinkUsers = async (req, res) => {
  try {
    const Researchlinkusers = await UserModel.find({});

    if (Researchlinkusers.length === 0) {
      return res.status(404).json({ msg: "Users not found", success: false });
    }

    return res
      .status(200)
      .json({ msg: "All ResearchLink Users",data:Researchlinkusers, success: true });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Internal server error", err: err.message, success: false });
  }
};

module.exports = ResearchLinkUsers;
