const ServiceModel = require("../models/ServiceModel.js");



exports.CreateService =async (req, res) => {
    let reqBody = req.body;
    let Result = await ServiceModel.create(reqBody)
    res.json({status: "success", data: Result});
}


exports.ServiceList = async (req, res)=>{
    let result = await ServiceModel.find()
    res.json({status:"success", data: result})
}



exports.ServiceListById =async (req, res) => {
    try{
        let id = req.params.id;
        let Result = await ServiceModel.findOne({_id:id})
        res.json({status: "success", data: Result});
    }catch(err){
        console.log(err);
    }
}




exports.UpdateService = async (req, res) => {
    try{
        let id = req.params.id

        let result = await ServiceModel.find({_id: id})

            if(result===null){
                res.json({status:"error", Message:"No Service Found"})
            }else {
                let result = await ServiceModel.updateOne({_id: id}, {$set: {
                        title: req.body.title,
                        description: req.body.description,
                        icon: req.body.icon
                    }
                })
                res.json({status: "success", Message: "Member Update Successfully", data: result})
            }


    }catch(err){
        res.json({status: "fail", data: err.message})
    }
}




exports.DeleteService =async (req, res) => {
    let id = req.params.id

    let result = await ServiceModel.deleteOne({_id: id})
    res.json({status: "success", Message: "Member Delete Successfully"})
}


