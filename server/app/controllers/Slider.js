const SliderModel = require("../models/SliderModel.js");


export const SliderList =async (req, res) => {
    let reqBody = req.body;
    let Result = await SliderModel.create(reqBody)

    res.json({status: "success", data: Result})
}