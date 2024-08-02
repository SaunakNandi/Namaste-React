import { createSlice } from "@reduxjs/toolkit";
import {OFFSET_LIVE_CHAT} from './constants'
const chatSlice=createSlice({
    name:'chat',
    initialState:{
        message:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            // we have done unshift so that the chat looks like you tube live chat. That is the new chat should appear at the bottom and old chat at the top
            state.message.splice(OFFSET_LIVE_CHAT,1) // at position 100 remove 1 element
            state.message.push(action.payload)
            // if(state.message.length>100)
            //     state.message.pop()
        }
    }
})

export const {addMessage}=chatSlice.actions
export default chatSlice.reducer