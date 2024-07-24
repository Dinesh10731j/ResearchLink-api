const UserModel = require("../models/signup.model");
const GetUserProfile = async (req,res)=>{

    try{

        const {userid} = req.params;

    const UserProfile = await UserModel.findById(userid);

    if(!UserProfile){
        return res.status(404).send({msg:'User not found',success:false})
    }


    return res.status(200).send({msg:'User profile fetch successfully',data:UserProfile});


    }catch(err){

        res.status(500).send({msg:'Internal server error',success:false},err);

    }

}



module.exports = GetUserProfile;