const FriendRequestModel = require("../models/friendrequest.model");

const FriendRequest = async (req, res) => {
  try {
    const { requestreceiverid, requestsenderid } = req.body;

    // Check if a friend request has already been sent
    const AlreadyRequestSend = await FriendRequestModel.findOne({
      sender: requestsenderid,
      receiver: requestreceiverid,
    });

    if (AlreadyRequestSend) {
      return res
        .status(400)
        .json({ msg: "Friend request already sent", success: false });
    }

    // If no friend request has been sent, create a new one
    const newFriendRequest = new FriendRequestModel({
      receiver: requestreceiverid,
      sender: requestsenderid,
    });

    // Save the new friend request to the database
    await newFriendRequest.save();

    // Populate the sender and receiver details
    const populatedFriendRequest = await FriendRequestModel.findById(newFriendRequest._id)
      .populate('sender', 'name affiliation profile profilePicture')
      .populate('receiver', 'name affiliation profile profilePicture');

    if (populatedFriendRequest) {
      return res
        .status(201)
        .json({ msg: "Friend request sent successfully", success: true, request: populatedFriendRequest });
    }

    // If creating the friend request failed for some reason
    return res
      .status(500)
      .send({ msg: "Failed to send friend request", success: false });
  } catch (err) {
    res.status(500).json({
      msg: "Internal server error",
      success: false,
      error: err.message,
    });
  }
};

module.exports = FriendRequest;
