import React from 'react';
import {Link} from "react-router-dom";
import Crud from "../assets/images/CrudLogo.png";


const DashboardMenu = () => {
    return (
        <div>
            <nav className="navbar sticky-top shadow-lg bg-white navbar-expand-lg navbar-light py-3">
                <div className="container">
                    <div className="navbar-brand">
                        <img className="img-fluid" src={Crud} alt="" width="70px"/>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav06"
                            aria-controls="nav06" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="nav06">
                        <ul className="navbar-nav mx-auto mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
                            <span className="nav-item justify-content-center ms-4 d-flex">
                                <Link className="nav-link text-danger fw-bold  me-2" to="/create">Create Blog</Link>
                                <Link className="nav-link text-muted me-2" to="/create">|</Link>
                                <Link className="nav-link text-danger fw-bold  me-2" to="/productList">Blog List</Link>
                            </span>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default DashboardMenu;