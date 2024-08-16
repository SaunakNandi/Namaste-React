import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showSearch:false,
        movieResults:null,
        movieNames:null
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showSearch = !state.showSearch;
        },
        addGPTMovieResult:(state,action)=>{
            const {movieNames,movieResults}=action.payload
            state.movieNames=movieNames
            state.movieResults=movieResults
        }
    }
})

export const {toggleGptSearchView, addGPTMovieResult}=gptSlice.actions
export default gptSlice.reducer 