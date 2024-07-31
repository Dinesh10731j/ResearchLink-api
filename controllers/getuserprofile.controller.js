
const UserModel = require("../models/signup.model");
const GetUserProfile = async (req,res)=>{
    
    try{

        const {id} = req.body;
        console.log('This is userid',id)

        const Userprofile = await UserModel.findById({id});
        console.log('')
        

        if(!Userprofile){
            return res.status(400).json({msg:'Userprofile not found',success:false})
        }

        return res.status(200).send({msg:'Userprofile fetch successfully',data:Userprofile,success:true})


    }catch(err){

        res.status(500).json({msg:'Internal server error',success:false,error:err.message})

    }
}


module.exports = GetUserProfile;