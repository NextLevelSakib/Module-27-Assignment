import React, {useEffect} from 'react';
import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer.jsx";
import Layout from "../Layout/layout.jsx";
import SliderStore from "../../src/store/SliderStore.js";
import Slider from "../components/Slider.jsx";
import BlogStore from "../store/BlogStore.js";
import Blog from "../components/Blog.jsx";
import Cookies from "js-cookie";


const HomePage = () => {

    const {SliderListRequest } = SliderStore()
    const {BlogListRequest, BlogList } = BlogStore()


    useEffect(() => {
        (async ()=>{
            await SliderListRequest();
            await BlogListRequest();
        })()
    }, []);



    return (
        <Layout>
            <Slider/>
            <Blog/>
        </Layout>
    );
};

export default HomePage;