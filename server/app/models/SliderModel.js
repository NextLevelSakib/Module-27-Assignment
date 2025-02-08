const mongoose = require('mongoose');

const SliderSchema = new mongoose.Schema({
    imageUrl: String,
    title: String,
    shortDescription: String,
},
    {
        timestamps: true,
        versionKey: false
    })


const SliderModel = mongoose.model("slider", SliderSchema);
module.exports = SliderModel;