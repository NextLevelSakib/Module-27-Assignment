import React from 'react';
import ServiceStore from "../../store/ServiceStore.js";
import {useNavigate} from "react-router-dom";
import {IsEmpty} from "../../helper/helper.js";
import toast from "react-hot-toast";
import SubmitButtonForService from "./SubmitButtonForService.jsx";

const ServiceCreate = () => {
    const {ServiceInputValue, ServiceInputOnChange, ServiceCreateRequest} = ServiceStore()


    let navigate = useNavigate();




    const ButtonOnClick= async ()=>{
        if(IsEmpty(ServiceInputValue.title)){
            toast.error("Please enter a title")
        }else if(IsEmpty(ServiceInputValue.description)){
            toast.error("Please enter a Description")
        }else if(IsEmpty(ServiceInputValue.icon)) {
            toast.error("Please enter an Icon (BootStrap) Name")
        }else{
            let result = await ServiceCreateRequest(ServiceInputValue);
            if(result.data.status === "success"){
                navigate("/dashboard/serviceContentCrud")
                toast.success("Service Created Successfully")
            }else{
                toast.error("Something went wrong, Please try again later.");
            }
        }
    }

    console.log(ServiceInputValue)



    return (

        <div className="container section " style={{height: '60vh'}}>
            <div className="row d-flex justify-content-center align-content-center" style={{height: '100%'}}>
                <div className="col-md-8">
                    <div className="card p-5">
                        <div className={'row'}>
                            <div className="col-4">
                                <label className={'fw-bold mb-2 text-muted'}>Title</label>
                                <input onChange={(e) => {
                                    ServiceInputOnChange("title", e.target.value)
                                }} placeholder="" type="email" required={true} className="form-control"/>
                            </div>



                            <div className="col-4  text-muted">
                                <label className={'fw-bold mb-2'}>Description</label>
                                <input onChange={(e) => {
                                    ServiceInputOnChange("description", e.target.value)
                                }} placeholder="" type="email" required={true} className="form-control"/>
                            </div>


                            <div className="col-4 text-muted">
                                <label className={'fw-bold mb-2'}>Icon- (BootStrap Class)</label>
                                <input onChange={(e) => {
                                    ServiceInputOnChange("icon", e.target.value)
                                }} placeholder="" type="email" required={true} className="form-control"/>
                            </div>

                        </div>
                        <br/>

                        <div className="row mt-4">
                            <div className="col-4">
                                <SubmitButtonForService onClick={ButtonOnClick} className="btn mt-3 btn-danger w-100" text={"Create"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCreate;