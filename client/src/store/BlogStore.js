import {create} from 'zustand';
import axios  from "axios";

const SliderStore=create((set)=>({



    IsSubmit: false,


    BlogInputValue:{Image:"", title:"", shortDescription:"", author:"", Badge:""},
    BlogValueOnChange: (name, value)=>{
        set((state)=>({
            BlogInputValue: {
                ...state.BlogInputValue,
                [name]: value
            }
        }))
    },


    CreateBlogRequest:async(Post)=>{
        try{
            set({IsSubmit:true});
            let res=await axios.post(`/api/createBlog`, Post);
            set({IsSubmit:false});
            set({BlogInputValue:{Image:"", title:"", shortDescription:"", author:"", Badge:""}})
            return (res);


        }catch(e){
            console.log(e)
        }
    },



    BlogList:null,
    BlogListRequest:async()=>{
        try{
            let res=await axios.get(`/api/blogList`);

            if(res.data['status']==="success"){
                set({BlogList:res.data['data']})
            }

        }catch(e){
            console.log(e)
        }
    },



    BlogDetails:null,
    BlogDetailsRequest:async (id)=>{
        try{
            let res=await axios.get(`/api/readBlogById/${id}`);
            console.log(res.data.data);
            if(res.data.status==="success"){
                set({BlogInputValue:res.data['data']})
            }else{
                console.log(res.data.status);
            }

        }catch(e){
            console.log(e)
        }
    },



    DeleteBlogRequest:async(id)=>{
        try{
            let res=await axios.get(`/api/deleteBlog/${id}`);
            return (res);
        }catch(e){
            console.log(e)
        }
    },


    UpdateBlogRequest:async(id, Post)=>{
        try{
            set({IsSubmit:true});
            let res=await axios.post(`/api/updateBlog/${id}`, Post);
            set({IsSubmit:false});
            return (res);
        }catch(e){
            console.log(e)
        }
    },




}))


export default SliderStore;