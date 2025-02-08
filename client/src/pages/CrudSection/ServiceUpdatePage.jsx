import React, {useEffect} from 'react';
import ServiceStore from "../../store/ServiceStore.js";
import {useParams} from "react-router-dom";
import ServiceUpdate from "../../components/CrudComponent/ServiceUpdate.jsx";
import ServiceMenu from "../../components/CrudComponent/ServiceMenu.jsx";

const ServiceUpdatePage = () => {

    let {ServiceDetailsRequest} = ServiceStore()


    const {id} = useParams();


    useEffect(() => {
        (async () => {
            await ServiceDetailsRequest(id)
        })()
    }, []);

    return (
        <>
            <ServiceMenu/>
            <ServiceUpdate/>
        </>
    );
};

export default ServiceUpdatePage;