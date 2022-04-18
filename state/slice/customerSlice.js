import {createSlice} from "@reduxjs/toolkit"

import {createCustomer} from "../services"

const initialState={
loading:true,
 customer:[],
  error:""
}

export const customerSlice=createSlice({
    name:"customer",
    initialState,
     extraReducers:{
        [createCustomer.pending]: (state,action)=>{
            state.loading=true
                 },   
 [createCustomer.fulfilled]: (state,action)=>{

   state.loading=false,
    state.customer=action.payload.data
         },

 [createCustomer.rejected]: (state,action)=>{
    state.error=action.payload
         },
     } 
})

export default customerSlice.reducer;