const UserModel = require("../models/signup.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const dotenv = require("dotenv");
dotenv.config();

const UserLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const LoginUser = await UserModel.findOne({ email }).populate('Userprofile','profile');

    if (!LoginUser) {
      return res
        .status(401)
        .json({ msg: "Invalid credientials", success: false });
    }


   

    const isMatch = await bcrypt.compare(password, LoginUser.password);

    if (!isMatch) {
      return res
        .status(401)
        .send({ msg: "Invalid credientials", success: false });
    }

    //Generating jwt token;

    const payload = {
      LoginUser: {
        id: LoginUser._id,
      },
    };

    //sign jwt token

    jwt.sign(payload, process.env.Signature, { expiresIn: "1h" }, (err, token) => {
      if (err) {
        return res.status(500).json({ msg: "Error signing JWT token", success: false });
      }
      res.status(201).json({ token: token, success: true ,data:LoginUser});
    });
    
  } catch (err) {
    res.status(500).send({ msg: "Internal sever error", success: true }, err);
  }
};

module.exports = UserLogin;
