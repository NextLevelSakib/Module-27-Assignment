const TeamMemberModel = require("../models/TeamMemberModel.js");



exports.TeamMemberList = async (req, res)=>{
    let Result = await TeamMemberModel.find()
    res.json({status:"success", data:Result});
}

exports.InsertTeamMemberList = async (req, res)=>{
    let reqBody = req.body
    let Result = await TeamMemberModel.create(reqBody)
    res.json({status:"success", data:Result});
}


exports.MemberListById =async (req, res) => {
    try{
        let id = req.params.id;
        let Result = await TeamMemberModel.findOne({_id:id})
        res.json({status: "success", data: Result});
    }catch(err){
        console.log(err);
    }
}




exports.UpdateMember = async (req, res) => {
    try{
        let id = req.params.id


        let result = await TeamMemberModel.updateOne({_id: id}, {$set: {
                Image: req.body.Image,
                title: req.body.title,
                experience: req.body.experience,
                shortDescription: req.body.shortDescription
            }
        })

        res.json({status: "success", Message: "Member Update Successfully", data: result})
    }catch(err){
        res.json({status: "fail", data: err.message})
    }
}




exports.DeleteMember =async (req, res) => {
    let id = req.params.id

    let result = await TeamMemberModel.deleteOne({_id: id})
    res.json({status: "success", Message: "Member Delete Successfully"})
}











