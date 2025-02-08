import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import AppLogo from '../assets/images/AppLogo.png'
import Cookies from "js-cookie";
import UserStore from "../store/UserStore.js";
import toast from "react-hot-toast";

const Menu = () => {
    let IsLogin = Cookies.get('token')

    const {UserLogout} = UserStore()

    let navigate = useNavigate();

    const logout =async () => {
        let res = await UserLogout()
        if(res.data.status==='success'){
            localStorage.clear()
            sessionStorage.clear()
            navigate('/')
            toast.success(res.data.Message)
        }else{
            toast.error("Something went wrong")
        }

    }


    return (
        <div>
            <nav className="navbar sticky-top shadow-lg bg-white navbar-expand-lg navbar-light py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="img-fluid" src={AppLogo} alt="" width="96px"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav06"
                            aria-controls="nav06" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="nav06">
                        <ul className="navbar-nav mx-auto mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-5">
                            <span className="nav-item justify-content-center ms-4 d-flex">
                                <Link className="nav-link text-success  me-2" to="/">Home</Link>
                                <Link className="nav-link text-success  me-2" to="/about">About</Link>
                                <Link className="nav-link text-success  me-2" to="/blog">Blog</Link>
                                <Link className="nav-link text-success  me-2" to="/service">Service</Link>
                                <Link className="nav-link text-success  me-2" to="/contact">Contact</Link>
                            </span>
                        </ul>
                    </div>
                    <div className=" d-lg-flex">


                        {
                            !!IsLogin===true? (
                                <>
                                    <Link type="button" className="btn ms-2 btn-success d-flex" to="/dashboard">DashBoard</Link>
                                    <button type="button" onClick={logout} className="btn ms-3 btn-success d-flex">LogOut</button>
                                </>
                            ):
                            (
                                <>
                                    <Link type="button" className="btn ms-2 btn-success d-flex" to="/login">Login</Link>
                                </>
                            )
                        }


                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Menu;