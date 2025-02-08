const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
        email: {type: String, unique: true, required: true},
        otp: {type: String, default: "0"},
    },
    {
        timestamps: true,
        versionKey: false
    })


const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;