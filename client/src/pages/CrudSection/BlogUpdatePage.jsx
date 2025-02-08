import React, {useEffect} from 'react';
import BlogStore from "../../store/BlogStore.js";
import BlogUpdate from "../../components/CrudComponent/BlogUpdate.jsx";
import {useParams} from "react-router-dom";
import BlogMenu from "../../components/CrudComponent/BlogMenu.jsx";


const BlogUpdatePage = () => {

    const {BlogDetailsRequest} = BlogStore()

    let {id} = useParams();



    useEffect(()=>{

               (async ()=> {
                   await BlogDetailsRequest(id)
                   console.log(id);
               })()

    }, [id])


    return (
        <>
            <BlogMenu/>
            <BlogUpdate/>
        </>
    );
};

export default BlogUpdatePage;