
const UploadResearchPaperModel = require("../controllers/uploadpaper.controller");
const GetResearchPaper = async (req,res)=>{
    try{
        const ResearchPapers = await UploadResearchPaperModel.find({});
        if(ResearchPapers.length === 0){
            return res.status(404).json({msg:"Research papers not found",success:true})
        }


        return res.status(200).json({msg:"Rsearch paper fetch successfully",success:true})

    }catch(err){
        res.status(500).json({msg:'Internal server error',success:false},err)
    }
}


module.exports = GetResearchPaper;