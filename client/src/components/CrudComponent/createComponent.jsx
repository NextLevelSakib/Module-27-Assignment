import React from 'react';
import SubmitButton from "../SubmitButton.jsx";
import CrudBlogStore from "../../store/CrudBlogStore.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const CreateComponent = () => {

    const {ProductInput, ProductValueOnChange, CreteProductRequest} = CrudBlogStore()


    let navigate = useNavigate();


    const ButtonOnClick= async ()=>{
        let result = await CreteProductRequest(ProductInput);

        if(result.data.status === "success"){
            navigate("/productList")
            toast.success(result.data.Message)
        }else{
            toast.error("Something went wrong, Please try again later.");
        }
    }

    console.log(ProductInput)

    return (
        <div className="container section " style={{height: '60vh'}}>
            <div className="row d-flex justify-content-center align-content-center" style={{height: '100%'}}>
                <div className="col-md-8">
                    <div className="card p-5">
                        <div className={'row'}>
                            <div className="col-4">
                                <label className={'fw-bold mb-2 text-muted'}>Product Name</label>
                                <input onChange={(e)=>{ProductValueOnChange("ProductName", e.target.value)}} placeholder="" type="email" required={true} className="form-control"/>
                            </div>


                            <div className="col-4">
                                <label className={'fw-bold mb-2 text-muted'}>Product Price</label>
                                <input onChange={(e)=>{ProductValueOnChange("ProductPrice", e.target.value)}} placeholder="" type="email" required={true} className="form-control"/>
                            </div>


                            <div className="col-4">
                                <label className={'fw-bold mb-2 text-muted'}>Quantity</label>
                                <input onChange={(e)=>{ProductValueOnChange("Quantity", e.target.value)}} placeholder="" type="email" required={true} className="form-control"/>
                            </div>


                            <div className="col-4 mt-2 text-muted">
                                <label className={'fw-bold mb-2'}>Total Price</label>
                                <input onChange={(e)=>{ProductValueOnChange("TotalPrice", e.target.value)}} placeholder="" type="email" required={true} className="form-control"/>
                            </div>
                        </div><br/>

                        <div className="row mt-4">
                            <div className="col-4">
                                <button onClick={ButtonOnClick} className="btn mt-3 btn-danger w-100">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateComponent;