const UserModel = require("../models/signup.model");
const bcrypt = require("bcryptjs");

const UserSignup = async (req, res) => {
  try {
    const { name, email, password, affiliation } = req.body;
    const hashedPassword = await bcrypt.hash(password,10)
    const user = await UserModel.create({
      name: name,
      email: email,
      password:hashedPassword,
      affiliation: affiliation,
    });


    const AlreadyExists = await UserModel.findOne({email});


    if(AlreadyExists){
      return res.status(400).json({msg:'User already exits '});
    }

    res.status(201).send({ data: user, success: true });
  } catch (err) {
    console.error("Error creating user:", err);
    res
      .status(500)
      .send({
        msg: "Internal server error",
        success: false,
        error: err.message,
      });
  }
};

module.exports = UserSignup;
