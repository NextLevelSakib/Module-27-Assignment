import React from 'react';
import ServiceMenu from "../../components/CrudComponent/ServiceMenu.jsx";
import ServiceCreate from "../../components/CrudComponent/ServiceCreate.jsx";

const ServiceCreatePage = () => {
    return (
        <>
            <ServiceMenu/>
            <ServiceCreate/>
        </>
    );
};

export default ServiceCreatePage;