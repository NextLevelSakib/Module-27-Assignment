import React from 'react';
import UserStore from "../store/UserStore.js";
import axios from "axios";
import SubmitButton from "./SubmitButton.jsx";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";


const OtpVerify = () => {


    const {OTPPageValue, OTPPageOnChange, OtpValueSubmit} = UserStore()

    let navigate = useNavigate();


    const OTPOnSubmit =async () => {

        let result = await OtpValueSubmit(OTPPageValue.otp)


        if(result.data.status==='success'){
            navigate('/')
            toast.success("Login SuccessFully")
        }else{
            toast.error(result.data.Message)
        }

    }

    return (
        <div className="container section " style={{height: '60vh'}}>
            <div className="row d-flex justify-content-center align-content-center" style={{height: '100%'}}>
                <div className="col-md-5">
                    <div className="card p-5">
                        <h4>Enter Your OTP</h4>
                        <p>The 6-digit OTP has been sent to the email That you provided.</p>
                        <input onChange={(e) => {
                            OTPPageOnChange("otp", e.target.value)
                        }} placeholder="OTP Verify" type={"email"} className="form-control"/>
                        <SubmitButton onClick={OTPOnSubmit} className="btn mt-3 btn-danger" text={"Submit"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpVerify;