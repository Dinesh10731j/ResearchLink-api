const followersModel = require('../models/followers.model');
const userModel = require("../models/signup.model");

const Followers = async (req, res) => {
    try {
        const { userId, followerId } = req.body;
        if (!userId || !followerId) {
            return res.status(400).json({ msg: 'UserId or followerId is missing', success: false });
        }

        const userExists = await userModel.findById(userId);
        if (!userExists) {
            return res.status(404).json({ msg: 'User does not exist', success: false });
        }

        
        const followerExists = await userModel.findById(followerId);
        if (!followerExists) {
            return res.status(404).json({ msg: 'Follower does not exist', success: false });
        }

        let userFollowers = await followersModel.findOne({ userId });

        if (!userFollowers) {
           
            userFollowers = new followersModel({
                userId,
                followers: [],
            });
        }

      
        if (userFollowers.followers.includes(followerId)) {
            return res.status(400).json({ msg: 'User is already followed by this follower', success: false });
        }

   
        userFollowers.followers.push(followerId);
        await userFollowers.save();

        return res.status(200).json({ msg: 'User followed successfully', success: true });
    } catch (err) {
        res.status(500).json({ msg: 'Internal server error', success: false,error:err?.message });
    }
};

module.exports = Followers;
