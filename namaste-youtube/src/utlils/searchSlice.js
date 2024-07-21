import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:'search',
    initialState:{

    },

    // We can try implementing LRU cache i.e we will restrict the object size to 100 and will keep removing the least used keys if we try to put 1 more key when object size is 100. To make it easy we can remove top element from the object
    reducers:{
        cacheResults:(state,action) =>{
            state=Object.assign(state,action)
        }
    }
})

export const {cacheResults}=searchSlice.actions
export default searchSlice.reducer