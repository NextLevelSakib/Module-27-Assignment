import React from 'react';
import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer.jsx";
import {Toaster} from "react-hot-toast";

const Layout = (props) => {
    return (
        <>
            <Menu/>

            {props.children}

            <Footer/>
        </>
    );
};

export default Layout;