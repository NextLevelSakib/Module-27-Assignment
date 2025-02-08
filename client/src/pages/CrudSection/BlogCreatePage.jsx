import React from 'react';
import CrudBlogStore from "../../store/CrudBlogStore.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import BlogMenu from "../../components/CrudComponent/BlogMenu.jsx";
import BlogCreate from "../../components/CrudComponent/BlogCreate.jsx";

const BlogCreatePage = () => {



    return (

        <>
            <BlogMenu/>
            <BlogCreate/>
        </>

    );
};

export default BlogCreatePage;