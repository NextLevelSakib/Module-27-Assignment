import React, {useEffect} from 'react';
import Layout from "../Layout/layout.jsx";
import ServiceSection from "../components/serviceSection.jsx";
import ServiceStore from "../store/ServiceStore.js";

const ServicePage = () => {

    const {ServiceListRequest} = ServiceStore()


    useEffect(()=>{
        (async ()=>{
            await ServiceListRequest();
        })()
    }, [])


    return (
        <Layout>
            <ServiceSection/>
        </Layout>
    );
};

export default ServicePage;