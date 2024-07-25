
const UserModel = require("../models/signup.model")
const Userdetails = async (req,res)=>{
    const {userid} = req.params;
    try{
const userdetails = await UserModel.findById(userid);
res.status(200).send({msg:'User detai',success:true,data:userdetails});
    }catch(err){
res.status(500).send({msg:'Internal server error',success:false},err)
    }
}


module.exports = Userdetails;