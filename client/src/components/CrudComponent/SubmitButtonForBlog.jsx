import React from 'react';
import BlogStore from "../../store/BlogStore.js";

const SubmitButton = (props) => {

    let {IsSubmit}=BlogStore();

    if(IsSubmit===false){
        return  <button onClick={props.onClick} type="submit" className={props.className}>{props.text}</button>
    }else {
        return (
            <button disabled={true} className={props.className}><div className="spinner-border spinner-border-sm" role="status"></div> Processing...</button>
        );
    }
};

export default SubmitButton;