import React, {useEffect} from 'react';
import ServiceMenu from "../../components/CrudComponent/ServiceMenu.jsx";
import ServiceStore from "../../store/ServiceStore.js";
import ServiceRead from "../../components/CrudComponent/ServiceRead.jsx";

const ServicePageCrud = () => {

    const {ServiceListRequest} = ServiceStore()

    useEffect(() => {
        (async ()=>{
            await ServiceListRequest();
        })()
    }, []);

    return (
        <div>
            <ServiceMenu />
            <ServiceRead/>
        </div>
    );
};

export default ServicePageCrud;