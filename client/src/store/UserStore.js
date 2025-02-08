import {create} from 'zustand';
import axios  from "axios";

const SliderStore=create((set)=>({


    IsSubmit:false,


    TeamMemberInputValue:{Image:"", title:"", experience:"", shortDescription:""},
    MemberInputOnChange: async (name, value)=>{
      set((state)=>({
          TeamMemberInputValue:{
              ...state.TeamMemberInputValue,
              [name]: value
          }
      }))
    },


    MemberCreate: async (Post)=>{
        try{
            set({IsSubmit:true});
            let res=await axios.post(`/api/createMember`, Post);
            set({IsSubmit:false});
            set({TeamMemberInputValue:{Image:"", title:"", experience:"", shortDescription:""}})
            return res
        }catch(e){
            console.log(e)
        }
    },


    MemberDetails: async (id)=>{
        try{
            let res=await axios.get(`/api/memberListById/${id}`);
            if(res.data.status==="success"){
                set({TeamMemberInputValue:res.data['data']})
            }else{
                console.log(res.data.status);
            }
        }catch(e){
            console.log(e)
        }
    },



    DeleteMemberRequest: async (id)=>{
        try{
            let res=await axios.get(`/api/deleteMember/${id}`);
            console.log(res.data.status);
            return (res)
        }catch(e){
            console.log(e)
        }
    },


    MemberListByIdRequest: async (id)=>{
        try{
            let res=await axios.get(`/api/memberListById/${id}`);
            console.log(res.data.status);
            return (res)
        }catch(e){
            console.log(e)
        }
    },


    MemberUpdate: async (id ,Post)=>{
        try{
            set({IsSubmit:true});
            let res=await axios.post(`/api/updateMember/${id}`, Post);
            console.log(res.data.status);
            set({IsSubmit:false});
            return res
        }catch(e){
            console.log(e)
        }
    },






    MemberList:null,
    MemberListRequest:async()=>{
        try{
            let res=await axios.get(`/api/memberList`);
            console.log(res.data.status);
            if(res.data['status']==="success"){
                set({MemberList: res.data['data']})
            }
        }catch(e){
            console.log(e)
        }
    },







    LoginPageValue:{email: ""},
    LoginOnChange:async (name, value)=>{
        set((state)=>({
            LoginPageValue:{
                ...state.LoginPageValue,
                [name]:value
        }
        }))
    },




    LoginValueSubmit:async(email)=>{
        try{
            set({IsSubmit:true});
            let res=await axios.get(`/api/login/${email}`);
            set({IsSubmit:false});
            sessionStorage.setItem('email',email);
            return res

        }catch(e){
            console.log(e)
        }
    },



    //OTP

    OTPPageValue: {otp: ""},
    OTPPageOnChange: async (name, value)=>{
        set((state)=>({
            OTPPageValue:{
                ...state.OTPPageValue,
                [name]:value
            }
        }))
    },


    OtpValueSubmit:async(otp)=>{
        try{
            set({IsSubmit:true});
            let email = sessionStorage.getItem('email');
            let res=await axios.get(`/api/otpVerify/${email}/${otp}`);
            set({IsSubmit:false});
            return res
        }catch(e){
            console.log(e)
        }
    },


    UserLogout:async()=>{
        try{
            let res= await axios.get(`/api/logout`);
            return (res)
        }catch(e){
            console.log(e)
        }
    },


}))


export default SliderStore;