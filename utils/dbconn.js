const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DbConn = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
    }
};

module.exports = DbConn;
