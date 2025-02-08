import React, {useEffect} from 'react';
import UserStore from "../../store/UserStore.js";
import {useParams} from "react-router-dom";
import TeamUpdate from "../../components/CrudComponent/TeamUpdate.jsx";
import BlogMenu from "../../components/CrudComponent/BlogMenu.jsx";

const TeamUpdatePage = () => {

    const {MemberDetails} = UserStore()


    const {id} = useParams();

    useEffect(()=>{
        (async ()=>{
            await MemberDetails(id);
        })()
    }, [id])

    return (
        <>
            <BlogMenu/>
            <TeamUpdate/>
        </>
    );
};

export default TeamUpdatePage;