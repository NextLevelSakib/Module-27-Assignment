const {JWT_SECRET,JWT_EXPIRATION_TIME} = require("../config/config.js")
const jwt = require("jsonwebtoken");

exports. EncodeToken = (email, user_id) => {

    const key = JWT_SECRET
    const EXPIRE = { expiresIn: JWT_EXPIRATION_TIME }
    const PAYLOAD = {email: email, user_id: user_id}
    return jwt.sign(PAYLOAD,key,EXPIRE)
}



//DecodeToken-- Always Use Try,Catch

exports. DecodeToken = (token) => {
    try{
        return jwt.verify(token, JWT_SECRET)
    }catch (err){
        return null
    }
}



