const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
        title: {type: String},
        description: {type: String},
        icon: {type: String},
    },
    {
        timestamps: true,
        versionKey: false
    })


const ServiceModel = mongoose.model("services", ServiceSchema);
module.exports = ServiceModel;