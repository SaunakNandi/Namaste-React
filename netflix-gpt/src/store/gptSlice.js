import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showSearch:false,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showSearch = !state.showSearch;
        }
    }
})

export const {toggleGptSearchView}=gptSlice.actions
export default gptSlice.reducer 