import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="section-bottom shadow-lg bg-white">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="bodyMedium fw-bold">Skills - BackEnd</h1><hr/>
                            <p className="my-2">
                                <Link className="nav-link" to="/">Node JS</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/">Express JS</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/">MongoDB</Link>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h1 className="bodyMedium fw-bold">Skills - FrontEnd</h1><hr/>
                            <p className="my-2">
                                <Link className="nav-link" to="/">React JS</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/">User InterFace</Link>
                            </p>
                        </div>

                        <div className="col-md-4">
                            <h1 className="bodyMedium fw-bold">About ME</h1><hr/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum </p>
                            {/*<img className="w-100" src={pay}/>*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark py-3 text-center">
                <p className="text-white bodySmal">All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;