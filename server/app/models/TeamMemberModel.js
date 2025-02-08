const mongoose = require('mongoose');

const TeamMemberSchema = new mongoose.Schema({
        Image: {type: String, required: true},
        title: {type: String, required: true},
        experience: {type: String, required: true},
        shortDescription: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    })


const MembersModel = mongoose.model("teamMemberList", TeamMemberSchema);
module.exports = MembersModel;