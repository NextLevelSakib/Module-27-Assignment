import React from 'react';
import Cookies from 'js-cookie';
import {Navigate, useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoute = (props) => {
    let navigate = useNavigate();

    return !!Cookies.get('token')===true? props.children : <Navigate to="/login"/>

};

export default PrivateRoute;