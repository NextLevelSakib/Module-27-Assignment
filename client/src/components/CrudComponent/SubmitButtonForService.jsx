import React from 'react';
import ServiceStore from "../../store/ServiceStore.js";

const SubmitButtonForService = (props) => {
    let {IsSubmit}=ServiceStore();

    if(IsSubmit===false){
        return  <button onClick={props.onClick} type="submit" className={props.className}>{props.text}</button>
    }else {
        return (
            <button disabled={true} className={props.className}><div className="spinner-border spinner-border-sm" role="status"></div> Processing...</button>
        );
    }
};

export default SubmitButtonForService;