import React from 'react';
import UserStore from "../../store/UserStore.js";
import {Link, useNavigate, useParams} from "react-router-dom";
import toast from "react-hot-toast";

const TeamRead = () => {
    const {MemberList, DeleteMemberRequest} = UserStore()




    let DeleteMember = async (id)=>{
       let result = await DeleteMemberRequest(id)
        if(result.data.status==='success'){
            toast.success("Member Deleted Successfully.")
            setTimeout(()=>{
                window.location.href='/dashboard/teamContentCrud'
            }, 700)
        }
    }


    if(MemberList===null){
        return (
            <h1>Loading</h1>
        )
    }else {
        return (
            <div>
                <div className={'container mt-5 py-3'}>
                    <div className={'row'}>
                        <div className={'mb-3'}>
                            <div className={' mx-auto d-flex justify-content-center align-items-center mb-3'}>
                                <h1 className={'bodyLargeX fw-bolder'}>Our Team Member</h1>
                            </div>
                            <p className={'text-center'}>We provide web Services<br/>Let’s create the Best solution for
                                you.
                            </p>
                            <hr/>
                        </div>

                        {
                            MemberList.map((item, index) => {
                                return (
                                    <div key={index} className="col-4 col-lg-8r col-md-8r p-2">

                                        <div className={'card h-100 rounded-3 bg-white'}>
                                            <div className="card-body">
                                                <img alt="img" className="w-100 mb-3 card-img card-img-top" src={item.Image}/>
                                                <p className="bodyLarge fw-bold d-inline">{item.title}</p>
                                                <h6 className={'d-inline ms-2'}><span className="badge bg-secondary">{item.experience}</span></h6>
                                                <h1 className={'bodyMedium mt-4'}>{item.shortDescription}</h1>
                                                <div className={'mt-3'}>
                                                    <Link
                                                        to={`/dashboard/teamUpdate/${item._id}`}
                                                        className={'btn text-white bg-primary mt-2 px-2 py-2 '} >Update
                                                    </Link>
                                                    <button
                                                        onClick={()=>DeleteMember(item._id)}
                                                        className={'btn text-white bg-danger mt-2 px-2 py-2 ms-2'}>Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>

        )
    }


};

export default TeamRead;