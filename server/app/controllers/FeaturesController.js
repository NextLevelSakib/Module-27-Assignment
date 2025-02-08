import {EncodeToken, DecodeToken} from "../utility/tokenUtility.js";
import EmailSend from "../utility/emailUtility.js";
import * as path from "node:path";


export const TokenEncode = async (req, res) => {

   let result = EncodeToken("NextLevelSakib(NLS)@example.com", "12345678")
    res.json({token: result})
}


export const TokenDecode = async (req, res) => {

    let result = DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik5leHRMZXZlbFNha2liKE5MUylAZXhhbXBsZS5jb20iLCJ1c2VyX2lkIjoiMTIzNDU2NzgiLCJpYXQiOjE3MzA4MjEwNDMsImV4cCI6MTczMzQxMzA0M30.NVMWOmPyEPQTYzBHjAH4UGJNehiTUJWWAY2LnWT6fDg")
    res.json({token: result})


}


export const Email = async (req, res) => {

    let EmailTo = "sajedulislamsakib312013@gmail.com" //Jake email Pathano hobe tar Email address
    let EmailText = "a" //Ki Text ba barta pathaben
    let EmailSubject = "Welcome to Our Platform! Here’s Your Secure PIN 🔒" //email er Subject ki hobe
    let EmailHTMLBody = "Dear Sir, Its Me Sakib, Mainly You have purchase a Mr.Beast Chocolate 2 day ago But " //Email er Html Body ki hobe ba user ja dekhbe ba je message ta pabe ota


    let result = EmailSend(EmailTo, EmailText, EmailSubject, EmailHTMLBody)
    res.json({EmailStatus: result})

}


export const Profile = async (req, res) => {

    res.json({Status: "Ok!"})

}


export const CreateCookies = async (req, res) => {

    let CookieOptions = {
        expires: new Date(Date.now() + 3600 * 1000), //Cookie Expire Time
        httponly: true,
        sameSite: true,
    }

    let data = "Sakib" //Cookie Value
    let cookieName = "YourName" //Cookie Key

    res.cookie(cookieName, data)

    res.json({status: "Ok"})

}


export const RemoveCookies = async (req, res) => {
    let CookieOptions = {
        expires: new Date(Date.now() - 3600 * 1000), //Cookie Expire Time
        httponly: true,
        sameSite: true,
    }

    let data = "" //Cookie Value
    let cookieName = "YourName" //Cookie Key

    res.cookie(cookieName, data)

    res.json({status: "Ok"})
}


export const FileUpload = async (req, res) => {

    //Catch The File
    let myImage = req.files['myImage'];

    //Get The File Name
    let myFileName = myImage.name

    //Prepare File Storage Path
    let myFilePath = path.resolve(process.cwd(), 'storage', myFileName);

    //Move The File Catch Before
    myImage.mv(myFilePath, function (err) {
        if (err) {
            res.json({status: "not OK"})
        }else{
            res.json({status: "Ok"})
        }
    })
}