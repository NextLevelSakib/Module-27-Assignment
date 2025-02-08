import {create} from 'zustand';
import axios  from "axios";

const SliderStore=create((set)=>({


    SliderList:null,
    SliderListRequest:async()=>{
        try{
            let res=await axios.get(`/api/sliderList`);
            if(res.data['status']==="success"){
                set({SliderList:res.data['Data']})
            }
        }catch(e){
            console.log(e)
        }
    },



}))


export default SliderStore;