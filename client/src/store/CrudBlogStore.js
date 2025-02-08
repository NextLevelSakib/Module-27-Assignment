import {create} from 'zustand';
import axios  from "axios";

const CrudBlogStore= create((set)=>({


    ProductInput:{ProductName: "", ProductPrice: "", Quantity: "", TotalPrice: ""},
    ProductValueOnChange: (name, value)=>{
        set((state)=>({
            ProductInput: {
                ...state.ProductInput,
                [name]: value
            }
        }))
    },




    CreteProductRequest:async(Post)=>{
        try{
            let res=await axios.post(`/api/createProduct`, Post);
            return (res);

        }catch(e){
            console.log(e)
        }
    },


    ProductListRequest:async()=>{
        try{
            let res=await axios.get(`/api/readProduct`);
            return (res);

        }catch(e){
            console.log(e)
        }
    },



}))


export default CrudBlogStore;