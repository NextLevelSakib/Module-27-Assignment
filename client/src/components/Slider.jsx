import React from 'react';
import SliderStore from "../../src/store/SliderStore.js";
import {Link} from "react-router-dom";
import Loading from "./Loading.jsx";

const Slider = () => {

    const {SliderList} = SliderStore()

    if(SliderList===null){
        return (
            <Loading/>
        )
    } else {
        return (
            <div>
                <div id="carouselExampleDark" className="carousel hero-bg carousel-light slide">
                    <div className="carousel-indicators">

                        {SliderList.map((item, i) => {
                            return (
                                <button key={i} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={i}
                                        className="active bg-white" aria-current="true" aria-label=""></button>
                            )
                        })}


                    </div>
                    <div className="carousel-inner py-5">
                        {
                            SliderList.map((item, i) => {
                                let active = "carousel-item"
                                if (i === 0) {
                                    active = "carousel-item active"
                                }
                                return (
                                    <div key={i} className={active} data-bs-interval="10000">
                                        <div className="container-fluid ">
                                            <div className="row px-5 justify-content-center">
                                                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                                    <h1 className="headline-1 fw-bolder mb-4">{item.title}</h1><hr/>
                                                    <p className="h2 mt-4 fw-bolder">{item['shortDescription']}</p>

                                                </div>
                                                <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                                    <img src={item['imageUrl']} className="w-100" alt="..."/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className="carousel-control-prev btn rounded-5" type="button"
                            data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" style={{filter: 'invert(1)'}} aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next btn text-success" type="button" data-bs-target="#carouselExampleDark"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" style={{filter: 'invert(1)'}}  aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }


};

export default Slider;