const mongoose = require("mongoose");

const DbConn = ()=>{
    try{
mongoose.connect('');
console.log('Connection successful');
    }catch(err){
        console.log('Error while connecting the database',err)
    }
}



module.exports = DbConn;