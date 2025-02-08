import React from 'react';
import TeamMenu from "../../components/CrudComponent/TeamMenu.jsx";
import TeamCreate from "../../components/CrudComponent/TeamCreate.jsx";

const TeamCreatePage = () => {
    return (
        <>
            <TeamMenu/>
            <TeamCreate/>
        </>
    );
};

export default TeamCreatePage;