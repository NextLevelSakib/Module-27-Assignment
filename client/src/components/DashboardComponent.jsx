import React, {useState} from 'react';
import {Link} from "react-router-dom";

const DashboardComponent = () => {



    return (
        <div className="d-flex">
            <div className="bg-dark text-white p-3" style={{height: "100vh", width: "250px"}}>
                <ul className="list-unstyled mt-2">
                    <li className="mb-2">
                        <Link to="/" className="btn btn-light w-100 text-center">Home</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/dashboard/blogContentCrud" className="btn btn-light w-100 text-center">Blog-
                            Crud</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/dashboard/teamContentCrud" className="btn btn-light w-100 text-center">Team Member-
                            Crud</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/dashboard/serviceContentCrud" className="btn btn-light w-100 text-center">Service-
                            Crud</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-grow-1 p-4 text-muted d-flex justify-content-center fs-6 fw-bold">Welcome To
                DashBoard
            </div>
        </div>
    );
};

export default DashboardComponent;