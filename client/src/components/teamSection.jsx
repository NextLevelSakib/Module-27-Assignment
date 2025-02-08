import React from 'react';
import {Link} from "react-router-dom";
import TeamMember1 from "../assets/images/TeamMember1.jpg"
import TeamMember2 from "../assets/images/TeamMember2.jpg"
import TeamMember3 from "../assets/images/TeamMember3.jpg"
import UserStore from "../store/UserStore.js";
import Loading from "./Loading.jsx";


const TeamSection = () => {


    const {MemberList} = UserStore()


    if(MemberList===null){
       return (
           <Loading/>
       )
    }else {
        return (
            <div>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'mb-3'}>
                            <div className={' mx-auto d-flex justify-content-center align-items-center mb-3'}>
                                <h1 className={'bodyLargeX fw-bolder'}>Our Team Member's</h1>
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

export default TeamSection;