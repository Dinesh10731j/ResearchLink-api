const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DbConn = async  () => {
    try {
     await mongoose.connect(process.env.MONGO_URI);

        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
    }
};

module.exports = DbConn;
