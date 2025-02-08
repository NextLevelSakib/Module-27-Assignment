import React, {useEffect} from 'react';
import CreateComponent from "../../components/CrudComponent/createComponent.jsx";
import DashboardMenu from "../../components/DashboardMenu.jsx";
import DashboardComponent from "../../components/DashboardComponent.jsx";
import Crud from "../../assets/images/CrudLogo.png";
import {Link} from "react-router-dom";
import BlogMenu from "../../components/CrudComponent/BlogMenu.jsx";
import BlogStore from "../../store/BlogStore.js";
import BlogRead from "../../components/CrudComponent/BlogRead.jsx";

const BlogPage_CRUD = () => {
    const {BlogListRequest} = BlogStore()

    useEffect(() => {
        (async () => {
            await BlogListRequest();
        })()
    }, []);

    return (
        <>
            <BlogMenu/>
            <BlogRead/>
        </>
    );
};

export default BlogPage_CRUD;