const FriendRequestModel = require("../models/friendrequest.model")
const GetFriendRequest = async (req,res)=>{
    try{
const allfriendrequests = await FriendRequestModel.find({}).populate('sender','name affiliation profile profilePicture').
populate('receiver','name affiliation profile profilePicture');

if(allfriendrequests.length === 0){
    return res.status(400).json({msg:'There is no any friend requests',success:false})
}


return res.status(200).json({msg:'All friend request fetch successfully',data:allfriendrequests,success:false})

    }catch(err){
        res.status(500).json({msg:'Internal server error',success:false,error:err.message})
    }
}

module.exports = GetFriendRequest;