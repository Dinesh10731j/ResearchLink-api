const UserModel = require("../models/signup.model");

const UserSignup = async (req, res) => {
    try {
        const { name, email, password, affiliation } = req.body;

        console.log(name); 

        const user = await UserModel.create({ name, email, password, affiliation });

        res.status(201).send({ data: user, success: true });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).send({ msg: 'Internal server error', success: false, error: err.message });
    }
};

module.exports = UserSignup;
