import React, {useEffect} from 'react';
import Layout from "../Layout/layout.jsx";
import AboutSection from "../components/aboutSection.jsx";
import TeamSection from "../components/teamSection.jsx";
import UserStore from "../store/UserStore.js";

const AboutPage = () => {

    const {MemberListRequest} = UserStore()


    useEffect(() => {
        (async ()=>{
            let res = await MemberListRequest()
            console.log(res)
        })()
    }, []);

    return (
        <Layout>
            <AboutSection/>
            <TeamSection/>
        </Layout>
    );
};

export default AboutPage;