import React, {useEffect} from 'react';
import DashboardMenu from "../../components/DashboardMenu.jsx";
import DashboardComponent from "../../components/DashboardComponent.jsx";
import CreateComponent from "../../components/CrudComponent/createComponent.jsx";
import Crud from "../../assets/images/CrudLogo.png";
import {Link} from "react-router-dom";
import TeamMenu from "../../components/CrudComponent/TeamMenu.jsx";
import TeamRead from "../../components/CrudComponent/TeamRead.jsx";
import UserStore from "../../store/UserStore.js";

const TeamPage_CRUD = () => {

    const {MemberListRequest} = UserStore()

    useEffect(()=>{
        (async ()=>{
            await MemberListRequest();
        })()
    }, [])

    return (
        <>
            <TeamMenu/>
            <TeamRead/>
        </>
    );
};

export default TeamPage_CRUD;