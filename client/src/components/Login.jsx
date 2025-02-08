import React from 'react';
import SliderStore from "../store/SliderStore.js";
import UserStore from "../store/UserStore.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton.jsx";

const Login = () => {

    const {LoginOnChange, LoginValueSubmit, LoginPageValue} = UserStore()

    let navigate = useNavigate()

    const OnSubmit =async ()=>{


        let result = await LoginValueSubmit(LoginPageValue.email)

        if(result.data.status==='success'){
            navigate('/verify')
            toast.success("Your Code Is " + result.data.OTP)
        }else {
            toast.error(result.data.Message)
        }
    }






    return (
        <div className="container section " style={{height:'60vh'}}>
            <div className="row d-flex justify-content-center align-content-center" style={{height: '100%'}}>
                <div className="col-md-5">
                    <div className="card p-5">
                        <h4>Enter Your Email</h4>
                        <p>A verification code will be sent to the email address you provide</p>
                        <input onChange={(e) => {LoginOnChange("email", e.target.value)}} placeholder="Email Address" type="email" className="form-control"/>
                        <SubmitButton onClick={OnSubmit} className="btn mt-3 btn-danger" text={"Submit"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;