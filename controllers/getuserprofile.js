const UploadProfileModel= require("../models/uploadprofile.model");
const GetUserProfile = async (req,res)=>{

    try{

        const {userprofile} = req.params;
        

    const UserProfile = await UploadProfileModel.findById(userprofile).populate('User');
   

    if(!UserProfile){
        return res.status(404).json({msg:'User not found',success:false})
    }


    return res.status(200).json({msg:'User profile fetch successfully',data:UserProfile});


    }catch(err){

        res.status(500).json({msg:'Internal server error',success:false,error:err});

    }

}



module.exports = GetUserProfile;