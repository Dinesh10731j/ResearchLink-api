const UserSignup = async (req,res)=>{
    try{

const {name,email,password,affiliation} = req.body;

console.log(name);
    }catch(err){
        res.status(500).send({msg:'Internal server error',success:false},err)
    }
}


module.exports = UserSignup;