import React, {useEffect} from 'react';
import BlogStore from "../../store/BlogStore.js";
import BlogRead from "../../components/CrudComponent/BlogRead.jsx";
import BlogMenu from "../../components/CrudComponent/BlogMenu.jsx";

const BlogReadPage = () => {

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

export default BlogReadPage;