import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import gptReducer from './gptSlice'
import congfigReducer from './configSlice'
const store=configureStore(
    {
        reducer:{
            user:userReducer,
            movies:movieReducer,
            gpt:gptReducer,
            config:congfigReducer,
        }
    }
)
export default store