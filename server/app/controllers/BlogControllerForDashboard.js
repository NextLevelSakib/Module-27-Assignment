const BlogModel = require("../models/BlogModel.js")

exports.CreateProduct =async (req, res) => {
    let reqBody = req.body
    let result = await BlogModel.create(reqBody)
    res.json({status: "success", Message: "Product Create Successfully", data: result})
}




exports.ReadProduct =async (req, res) => {
    let result = await BlogModel.find()
    res.json({status: "success", data: result})
}





exports.UpdateProduct =async (req, res) => {
    try{
        let id = req.params.id
        let reqBody = req.body


        let result = await BlogModel.updateOne({_id: id}, {$set: {
                ProductName: req.body.ProductName,
                ProductPrice: req.body.ProductPrice,
                Quantity: req.body.Quantity,
                TotalPrice: req.body.TotalPrice
            }
        })

        res.json({status: "success", Message: "Product Update Successfully", data: result})
    }catch(err){
        res.json({status: "fail", data: err.message})
    }
}




exports.DeleteProduct =async (req, res) => {
    let id = req.params.id

    let result = await BlogModel.deleteOne({_id: id})
    res.json({status: "success", Message: "Product Delete Successfully"})
}

