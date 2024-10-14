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

     
        if (userExists.followers.includes(followerId)) {
            return res.status(400).json({ msg: 'User is already followed by this follower', success: false });
        }

        userExists.followers.push(followerId);

        await userExists.save();

        return res.status(200).json({ msg: 'User followed successfully', success: true });
    } catch (err) {
      
        return res.status(500).json({ msg: 'Internal server error', success: false, error: err?.message });
    }
};

module.exports = Followers;
