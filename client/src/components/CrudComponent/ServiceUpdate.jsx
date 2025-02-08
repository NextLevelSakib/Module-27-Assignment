import React from 'react';
import ServiceStore from "../../store/ServiceStore.js";
import {useNavigate, useParams} from "react-router-dom";
import {IsEmpty} from "../../helper/helper.js";
import toast from "react-hot-toast";
import SubmitButtonForService from "./SubmitButtonForService.jsx";

const ServiceUpdate = () => {
    const {ServiceUpdateInputValue, ServiceUpdateInputOnChange, UpdateServiceRequest} = ServiceStore()


    let navigate = useNavigate();


    const {id} = useParams();


    const ServiceButtonOnClick= async ()=>{
        if(IsEmpty(ServiceUpdateInputValue.title)){
            toast.error("Please enter a title")
        }else if(IsEmpty(ServiceUpdateInputValue.description)){
            toast.error("Please enter a Description")
        }else if(IsEmpty(ServiceUpdateInputValue.icon)) {
            toast.error("Please enter an Icon (BootStrap) Name")
        }else{
            let result = await UpdateServiceRequest(id, ServiceUpdateInputValue);
            if(result.data.status === "success"){
                navigate("/dashboard/serviceContentCrud")
                toast.success("Service Updated Successfully")
            }else{
                toast.error("SomeThing went wrong");
            }
        }
    }

    console.log(ServiceUpdateInputValue)



    return (

        <div className="container section " style={{height: '60vh'}}>
            <div className="row d-flex justify-content-center align-content-center" style={{height: '100%'}}>
                <div className="col-md-8">
                    <div className="card p-5">
                        <div className={'row'}>
                            <div className="col-4">
                                <label className={'fw-bold mb-2 text-muted'}>Title</label>
                                <input value={ServiceUpdateInputValue.title} onChange={(e) => {
                                    ServiceUpdateInputOnChange("title", e.target.value)
                                }} placeholder="" type="text" required={true} className="form-control"/>
                            </div>



                            <div className="col-4  text-muted">
                                <label className={'fw-bold mb-2'}>Description</label>
                                <input value={ServiceUpdateInputValue.description} onChange={(e) => {
                                    ServiceUpdateInputOnChange("description", e.target.value)
                                }} placeholder="" type="text" required={true} className="form-control"/>
                            </div>


                            <div className="col-4 text-muted">
                                <label className={'fw-bold mb-2'}>Icon- (BootStrap Class)</label>
                                <input value={ServiceUpdateInputValue.icon} onChange={(e) => {
                                    ServiceUpdateInputOnChange("icon", e.target.value)
                                }} placeholder="" type="text" required={true} className="form-control"/>
                            </div>

                        </div>
                        <br/>

                        <div className="row mt-4">
                            <div className="col-4">
                                <SubmitButtonForService onClick={ServiceButtonOnClick} className="btn mt-3 btn-danger w-100" text={"Update"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceUpdate;