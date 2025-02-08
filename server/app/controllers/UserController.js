const UserModel = require("../models/UserModel.js");
const {EncodeToken} = require("../utility/tokenUtility");
const EmailSend = require("../utility/emailUtility");



exports.LoginUser = async (req, res) => {
    try{
        let email = req.params.email;
        let code = Math.floor(100000 + Math.random() * 900000);

        let ExitingUser = await UserModel.find({email : email})

        if(ExitingUser.length === 0){
            await UserModel.create({email: email, otp: code})
            res.json({status: "success", Message: "Login SuccessFully", OTP: code});
        }else{
            res.json({status: "fail", Message: "User Already Exists"});
        }


    }catch(e){
        console.log(e)
    }
}


exports.OTPVerify = async (req, res) => {
    let otp = req.params.otp;
    let email = req.params.email;


    let Data = await UserModel.findOne({email: email, otp: otp})

    if (Data===null){
        res.json({status: "error", Message: "No Data Found"});
    }else{


        let token = EncodeToken(Data['email'], Data['_id'])
        let cookieOptions = {expires:new Date(Date.now()+24*6060*1000), httpOnly:false}

        await UserModel.updateOne({email: email}, {otp: "0"})

        res.cookie('token', token, cookieOptions).json({status: "success", Message: "Otp Verified", token: token});


    }

}


exports.UserLogout = async (req, res) => {
    let cookieOption={expires:new Date(Date.now()-24*6060*1000), httpOnly:false}
    res.cookie('token',"",cookieOption)
    res.json({status:"success", Message: "Logout Successfully"});
}







