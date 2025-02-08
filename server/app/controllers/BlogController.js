const BlogModel = require("../models/BlogModel.js");



exports.CreateBlog =async (req, res) => {
    let reqBody = req.body;
    let Result = await BlogModel.create(reqBody)
    res.json({status: "success", data: Result});
}


    exports.BlogList =async (req, res) => {
    try{
        let Result = await BlogModel.find()
        res.json({status: "success", data: Result});
    }catch(err){
        console.log(err);
    }
}



exports.BlogListById =async (req, res) => {
    try{
        let id = req.params.id;
        let Result = await BlogModel.findOne({_id:id})
        res.json({status: "success", data: Result});
    }catch(err){
        console.log(err);
    }
}




exports.UpdateBlog = async (req, res) => {
    try{
        let id = req.params.id
        let reqBody = req.body


        let result = await BlogModel.updateOne({_id: id}, {$set: {
                Image: req.body.Image,
                title: req.body.title,
                shortDescription: req.body.shortDescription,
                author: req.body.author,
                Badge: req.body.Badge
            }
        })

        res.json({status: "success", Message: "Blog Update Successfully", data: result})
    }catch(err){
        res.json({status: "fail", data: err.message})
    }
}




exports.DeleteBlog =async (req, res) => {
    let id = req.params.id

    let result = await BlogModel.deleteOne({_id: id})
    res.json({status: "success", Message: "Blog Delete Successfully"})
}