import React from 'react';
import ServiceStore from "../../store/ServiceStore.js";
import Loading from "../Loading.jsx";
import {Link} from "react-router-dom";
import toast from "react-hot-toast";

const ServiceRead = () => {

    const {ServiceList, DeleteServiceRequest} = ServiceStore()


    let DeleteService = async (id)=>{
        let res = await DeleteServiceRequest(id)
        if(res.data.status === 'success'){
            toast.success("Service Deleted Successfully.");

            setTimeout(()=>{
                window.location.href="/dashboard/serviceContentCrud";
            }, 700)
        }
    }



    if(ServiceList===null){
        return (
            <Loading/>
            //Loading
        )
    } else {
        return (
            <div>
                <div className={'container py-5 mt-4'}>
                    <div className={'row'}>
                        <div className={'mb-3'}>
                            <div className={' mx-auto d-flex justify-content-center align-items-center mb-3'}>
                                <h1 className={'bodyLargeX fw-bolder'}>Service's</h1>
                            </div>
                            <p className={'text-center'}>We provide Web Services<br/>Let’s create the Best solution for you.</p>
                            <hr/>
                        </div>
                        {
                            ServiceList.map((item, i) => {
                                return (
                                    <div key={i} className="col-4 col-lg-8r col-md-8r p-2">

                                        <div className={'card h-100 rounded-3 bg-white'}>
                                            <div className="card-body">
                                                <i className={item.icon} style={{
                                                    fontSize: "55px",
                                                    justifyContent: "center",
                                                    display: "flex",
                                                    marginBottom: "15px"
                                                }}/><br/>
                                                <p className="bodyLarge fw-bold d-inline">{item.title}</p>
                                                <h1 className={'bodyMedium mt-3'}>{item.description}</h1>
                                            </div>

                                            <div className={'mt-2 ms-3 mb-4'}>
                                                <Link
                                                    to={`/dashboard/serviceUpdate/${item._id}`}
                                                    className={'btn text-white bg-primary mt-2 px-2 py-2 '}>Update
                                                </Link>
                                                <button
                                                    onClick={() => DeleteService(item._id)}
                                                    className={'btn text-white bg-danger mt-2 px-2 py-2 ms-2'}>Delete
                                                </button>
                                            </div>
                                        </div>


                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default ServiceRead;