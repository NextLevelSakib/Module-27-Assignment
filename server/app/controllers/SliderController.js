const SliderModel = require("../models/SliderModel.js");

exports. SliderList =async (req, res) => {
    try{
        let result = await SliderModel.find()
        res.json({status: "success", Data: result})
    }catch (e){
        res.json({status: "error", message: e});
    }
}


