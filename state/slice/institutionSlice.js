import {createSlice} from "@reduxjs/toolkit"

import {getInstituion} from "../services"

const initialState={
loading:true,
 institute:[],
  error:""
}

export const institutionSlice=createSlice({
    name:"institution",
    initialState,
     extraReducers:{
        [getInstituion.pending]: (state,action)=>{
            state.loading=true
                 },   
 [getInstituion.fulfilled]: (state,action)=>{

   state.loading=false,
    state.institute=action.payload.data.institutions
         },

 [getInstituion.rejected]: (state,action)=>{
    state.error=action.payload
         },
     } 
})

export default institutionSlice.reducer;