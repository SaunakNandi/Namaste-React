import { createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState: {
        items:[]
    },
    // reducers is an object
    reducers:{
        addItem: function(state, action){
            // mutating the state over here
            state.items.push(action.payload)
        },
        removeItem: function(state, action){
            state.items=state.items.filter(item=>item.id!==action.payload)
        },
        clearCart:(state)=>{
            state.items.length=0
        }
    }
})

export const {addItem, removeItem, clearCart}= cartSlice.actions
export default cartSlice.reducer;