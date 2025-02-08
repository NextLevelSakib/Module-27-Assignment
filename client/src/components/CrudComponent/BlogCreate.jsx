import React from 'react';
import CrudBlogStore from "../../store/CrudBlogStore.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import BlogStore from "../../store/BlogStore.js";
import {getBase64, IsEmpty} from "../../helper/helper.js";
import SubmitButton from "../../components/CrudComponent/SubmitButtonForBlog.jsx";

const BlogCreate = () => {
    const {BlogInputValue, BlogValueOnChange, CreateBlogRequest, } = BlogStore()


    let navigate = useNavigate();




    let getImage = async (file) => {
        let result =await getBase64(file.target.files[0]);
        console.log(result);
        BlogValueOnChange("Image", result);
    }

    const ButtonOnClick= async ()=>{
       if(IsEmpty(BlogInputValue.title)){
           toast.error("Please enter a title")
       }else if(IsEmpty(BlogInputValue.shortDescription)){
           toast.error("Please enter a Description")
       }else if(IsEmpty(BlogInputValue.author)){
           toast.error("Please enter an Author Name")
       }else if(IsEmpty(BlogInputValue.Badge)){
           toast.error("Please enter a Badge")
       }else if(IsEmpty(BlogInputValue.Image)){
           toast.error("Please enter an Image")
       }else{
           let result = await CreateBlogRequest(BlogInputValue);
           if(result.data.status === "success"){
               navigate("/dashboard/blogContentCrud")
               toast.success("Blog Created Successfully")
           }else{
               toast.error("Something went wrong, Please try again later.");
           }
       }
    }

    console.log(BlogInputValue)



    return (

        <div className="container section " style={{height: '60vh'}}>
            <div className="row d-flex justify-content-center align-content-center" style={{height: '100%'}}>
                <div className="col-md-8">
                    <div className="card p-5">
                        <div className={'row'}>
                            <div className="col-4">
                                <label className={'fw-bold mb-2 text-muted'}>Title</label>
                                <input onChange={(e) => {
                                    BlogValueOnChange("title", e.target.value)
                                }} placeholder="" type="email" required={true} className="form-control"/>
                            </div>


                            <div className="col-4">
                                <label className={'fw-bold mb-2 text-muted'}>Author Name</label>
                                <input onChange={(e) => {
                                    BlogValueOnChange("author", e.target.value)
                                }} placeholder="" type="email" required={true} className="form-control"/>
                            </div>


                            <div className="col-4">
                                <label className={'fw-bold mb-2 text-muted'}>Badge</label>
                                <input onChange={(e) => {
                                    BlogValueOnChange("Badge", e.target.value)
                                }} placeholder="" type="email" required={true} className="form-control"/>
                            </div>


                            <div className="col-4 mt-2 text-muted">
                                <label className={'fw-bold mb-2'}>Description</label>
                                <input onChange={(e) => {
                                    BlogValueOnChange("shortDescription", e.target.value)
                                }} placeholder="" type="email" required={true} className="form-control"/>
                            </div>

                            <div className="col-4 mt-2 text-muted">
                                <label className={'fw-bold mb-2'}>Image</label>
                                <input onChange={getImage} placeholder="" type="file" required={true} className="form-control"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row mt-4">
                            <div className="col-4">
                                <SubmitButton onClick={ButtonOnClick} className="btn mt-3 btn-danger w-100" text={"Create"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCreate;