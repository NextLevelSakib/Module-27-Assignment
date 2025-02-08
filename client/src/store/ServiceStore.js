import {create} from 'zustand';
import axios  from "axios";

const SliderStore=create((set)=>({



    IsSubmit: false,

    ServiceInputValue: {title:"", description:"", icon:""},
    ServiceInputOnChange: async (name, value)=>{
        set((state)=>({
            ServiceInputValue:{
                ...state.ServiceInputValue,
                [name]: value
            }
        }))
    },


    ServiceUpdateInputValue: { title: "", description: "", icon: "" },
    ServiceUpdateInputOnChange: async (name, value) => {
        set((state) => ({
            ServiceUpdateInputValue: {
                ...state.ServiceUpdateInputValue,
                [name]: value
            }
        }));
    },






    ServiceCreateRequest: async (Post)=>{
        try{
            set({IsSubmit:true});
            let res=await axios.post(`/api/createService`, Post);
            set({IsSubmit:false});
            return (res)

        }catch(e){
            console.log(e)
        }
    },




    ServiceList:null,
    ServiceListRequest:async()=>{
        try{
            let res=await axios.get(`/api/service`);

            if(res.data['status']==="success"){
                set({ServiceList:res.data['data']})
            }

        }catch(e){
            console.log(e)
        }
    },



    ServiceDetailsRequest:async (id)=>{
        try{
            let res=await axios.get(`/api/serviceListById/${id}`);
            console.log(res.data.data);
            if(res.data.status==="success"){
                set({ServiceUpdateInputValue:res.data['data']})
            }else{
                console.log(res.data.status);
            }

        }catch(e){
            console.log(e)
        }
    },



    DeleteServiceRequest:async(id)=>{
        try{
            let res=await axios.get(`/api/DeleteService/${id}`);
            return (res);
        }catch(e){
            console.log(e)
        }
    },




    UpdateServiceRequest:async(id, Post)=>{
        try{
            set({IsSubmit:true});
            let res=await axios.post(`/api/UpdateService/${id}`, Post);
            set({IsSubmit:false});
            return res;
        }catch(e){
            console.log(e)
        }
    },





}))


export default SliderStore;