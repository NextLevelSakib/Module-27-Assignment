import React from 'react';
import Image from '../assets/images/AboutImage.jpg';

const AboutSection = () => {
    return (
        <div className={'container mt-1 mb-5 py-5'}>
            <div className={'col-12 d-flex justify-content-center align-items-center gap-5'}>
                <div className={'col-lg-6'}>
                    <div className={''}>
                        <h1 className={'mb-2 fw-bold'}>About ME</h1><hr/>
                        <p className={'mt-5 bodyLarge fw-semibold text-muted'}>Sakib – MERN Stack Developer <br/>
                            Passionate about BackEnd And FrontEnd development <br/> and scalable web applications.
                            <br/>Experienced in Node.js, Express.js, MongoDB, and React.js.
                            <br/>Always learning and improving to build efficient solutions. 🚀
                        </p>
                    </div>
                </div>

                <div className={'col-lg-6 ms-3 d-flex justify-content-center'}>

                        <img className={'w-50'} src={Image} alt={'Image'}/>

                </div>
            </div>
        </div>
    );
};

export default AboutSection;