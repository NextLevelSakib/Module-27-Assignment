const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
        Image: {type: String, required: true},
        title: {type: String, required: true},
        shortDescription: {type: String, required: true},
        author: {type: String, required: true},
        Badge: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    })


const BlogModel = mongoose.model("blog", BlogSchema);
module.exports = BlogModel;