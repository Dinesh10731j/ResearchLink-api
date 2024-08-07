const UserModel = require("../models/signup.model");
const bcrypt = require("bcryptjs");

const UserSignup = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      affiliation,
      profilePicture,
      profile,
      researchField,
      
 
    } = req.body;

    const AlreadyExists = await UserModel.findOne({ email });

    if (AlreadyExists) {
      return res.status(400).json({ msg: "User already exits " });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      name: name,
      email: email,
      password: hashedPassword,
      affiliation: affiliation,
      profile: profile,
     profilePicture:profilePicture,
     researchField:researchField
    });

    res.status(201).json({ data: user, success: true });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({
      msg: "Internal server error",
      success: false,
      error: err.message,
    });
  }
};

module.exports = UserSignup;
