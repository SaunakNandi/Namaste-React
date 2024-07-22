import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        message:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            // we have done unshift so that the chat looks like you tube live chat. That is the new chat should appear at the bottom and old chat at the top
            state.message.unshift(action.payload)
            if(state.message.length>100)
                state.message.pop()
        }
    }
})

export const {addMessage}=chatSlice.actions
export default chatSlice.reducer