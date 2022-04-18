import {getinstituion} from "../pages/api/illion"
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getInstituion= createAsyncThunk(
"institution/getinstituion", async () => await getinstituion()
// {
//     try {
//         const res= await getinstituion();
//         console.log(res)
//         return res.data;
        
//     } catch (error) {
//        console.error(error);
//     }
   
// }
);


//create customer





export const createCustomer=createAsyncThunk(
    "customer/createCustomer",async (bodydata)=>{
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-API-KEY':'19e857ab-fcbe-4d6a-903a-e151c37abda1'
            },
            body:bodydata
        };
        const res= await fetch('https://apitest.bankfeeds.com.au/v1/customer/create',settings);
         const data=res.json();
         return data;
    }
)