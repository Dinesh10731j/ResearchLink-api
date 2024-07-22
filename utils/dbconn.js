const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DbConn = async ()=>{
    try{
await mongoose.connect(process.env.DB_URI);
console.log('Connection successful');
    }catch(err){
        console.log('Error while connecting the database',err);
    }
}



module.exports = DbConn;