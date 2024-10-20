const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "E-mail is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  affiliation: {
    type: String,
    required: [true, "Affiliation is required"],
  },
  profile: {
    type: String,
    required: [true, "Profile is required"],
  },
  profilePicture: {
    type: String,
  },


  researchField:{
    type:String,
    required:[true,'Research field is required']

  },
  followers:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}]
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
