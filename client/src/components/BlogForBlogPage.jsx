import React from 'react';
import BlogStore from "../store/BlogStore.js";
import {Link} from "react-router-dom";
import Loading from "./Loading.jsx";

const BlogForBlogPage = () => {
    const {BlogList} = BlogStore()




    if(BlogList===null){
        return (
            <Loading/>
            //Loading
        )
    } else {
        return (
            <div>
                <div className={'container mt-5 py-4 mb-3'}>
                    <div className={'row'}>
                        <div className={'mb-3'}>
                            <div className={' mx-auto d-flex justify-content-center align-items-center mb-3'}>
                                <h1 className={'bodyLargeX fw-bolder'}>Blog Section- News</h1>
                            </div>
                            <p className={'text-center'}>We provide web Services<br/>Let’s create the Best solution for
                                you.
                            </p>
                            <hr/>
                        </div>
                        {
                            BlogList.map((item, i) => {
                                return (
                                    <div key={i} className="col-4 col-lg-8r col-md-8r p-2">

                                        <div className={'card h-100 rounded-3 bg-white'} style={{cursor:'pointer'}}>
                                            <div className="card-body">
                                                <img alt="img" className="w-100 mb-3 card-img card-img-top"
                                                     src={item['Image']}/>
                                                <p className="bodyLarge fw-bold d-inline">{item['title']}</p>
                                                <h6 className={'d-inline ms-2'}><span className="badge bg-secondary">{item.Badge}</span></h6>
                                                <h1 className={'bodyMedium mt-4'}>{item.shortDescription}</h1>
                                                <h3 className={'bodySmal mt-3'}><span
                                                    className={'fw-bold'}>Author:-</span> {item.author}</h3>
                                                <Link className={'btn text-white bg-success mt-2 px-2 py-2'}
                                                      to={`/details/${item['_id']}`}>Read More</Link>
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

export default BlogForBlogPage;