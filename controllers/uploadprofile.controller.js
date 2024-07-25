
const UploadProfileModel = require('../models/uploadprofile.model');
const UploadProfile = async (req,res) =>{


    try{

        const {profile} = req.body;

        const UserProfile = await UploadProfileModel.create(profile);

        res.status(201).send({msg:'User profile uploaded successfully',data:UserProfile,success:true});

    }catch(err){
res.status(500).send({msg:'Internal server error',success:false,error:err})
    }

   

}


module.exports =  UploadProfile ;