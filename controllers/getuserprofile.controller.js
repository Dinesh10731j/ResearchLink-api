
const UserModel = require("../models/signup.model");
const GetUserProfile = async (req,res)=>{
    
    try{

        const {id} = req.body;

        const Userprofile = await UserModel.findById(id);

        if(Userprofile.length === 0){
            return res.status(400).json({msg:'Userprofile not found',success:false})
        }

        return res.status(200).send({msg:'Userprofile fetch successfully',data:Userprofile,success:true})


    }catch(err){

    }
}


module.exports = GetUserProfile;