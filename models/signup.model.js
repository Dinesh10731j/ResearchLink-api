const mongoose = require("mongoose");
const {Schema} = mongoose
const UserSchema = new Schema({
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


  profile:[{ type: Schema.Types.ObjectId,ref:'Userprofile' }],
   
  
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
