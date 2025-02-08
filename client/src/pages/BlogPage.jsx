import React, {useEffect} from 'react';
import Layout from "../Layout/layout.jsx";
import BlogStore from "../store/BlogStore.js";
import BlogForBlogPage from "../components/BlogForBlogPage.jsx";

const BlogPage = () => {


    const {BlogListRequest} = BlogStore()


    useEffect(()=>{
        (async ()=>{
            await BlogListRequest();
        })()
    }, [])



    return (
        <Layout>
            <BlogForBlogPage/>
        </Layout>
    );
};

export default BlogPage;