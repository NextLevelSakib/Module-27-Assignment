import React from 'react';
import UserStore from "../../store/UserStore.js";
import {useNavigate, useParams} from "react-router-dom";
import {getBase64, IsEmpty} from "../../helper/helper.js";
import toast from "react-hot-toast";
import SubmitButton from "../SubmitButton.jsx";

const TeamUpdate = () => {

    const {TeamMemberInputValue, MemberInputOnChange, MemberUpdate} = UserStore()


    let navigate = useNavigate();




    let getImage = async (file) => {
        let result =await getBase64(file.target.files[0]);
        console.log(result);
        MemberInputOnChange("Image", result);
    }


    let {id} = useParams();


    const TeamButtonOnClick= async ()=>{
        if(IsEmpty(TeamMemberInputValue.title)){
            toast.error("Please enter a title")
        }else if(IsEmpty(TeamMemberInputValue.experience)){
            toast.error("Please enter the experience")
        }else if(IsEmpty(TeamMemberInputValue.shortDescription)) {
            toast.error("Please enter a Description")
        }else{
            let result = await MemberUpdate(id, TeamMemberInputValue);
            if(result.data.status === "success"){
                navigate("/dashboard/teamContentCrud")
                toast.success("Member Updated Successfully")
            }else{
                toast.error("Already Exists");
            }
        }
    }



    return (

        <div className="container section " style={{height: '60vh'}}>
            <div className="row d-flex justify-content-center align-content-center" style={{height: '100%'}}>
                <div className="col-md-8">
                    <div className="card p-5">
                        <div className={'row'}>
                            <div className="col-4">
                                <label className={'fw-bold mb-2 text-muted'}>Title</label>
                                <input onChange={(e) => {
                                    MemberInputOnChange("title", e.target.value)
                                }} value={TeamMemberInputValue.title} placeholder="" type="email" required={true} className="form-control"/>
                            </div>


                            <div className="col-4">
                                <label className={'fw-bold mb-2 text-muted'}>Experience</label>
                                <input onChange={(e) => {
                                    MemberInputOnChange("experience", e.target.value)
                                }} value={TeamMemberInputValue.experience} placeholder="" type="email" required={true} className="form-control"/>
                            </div>


                            <div className="col-4">
                                <label className={'fw-bold mb-2 text-muted'}>Description</label>
                                <input onChange={(e) => {
                                    MemberInputOnChange("shortDescription", e.target.value)
                                }} value={TeamMemberInputValue.shortDescription} placeholder="" type="email" required={true} className="form-control"/>
                            </div>


                            <div className="col-4 mt-2 text-muted">
                                <label className={'fw-bold mb-2'}>Image</label>
                                <input onChange={getImage} placeholder="" type="file" required={true} className="form-control"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row mt-4">
                            <div className="col-4">
                                <SubmitButton onClick={TeamButtonOnClick} className="btn mt-3 btn-danger w-100" text={"Update"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamUpdate;