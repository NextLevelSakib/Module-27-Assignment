import React from 'react';

const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center"
             style={{minHeight: '100vh', background: "black", opacity: "50%"}}>
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;