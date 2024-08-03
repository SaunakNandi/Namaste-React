import React from 'react'
import Login from './Login'
import { Outlet } from 'react-router-dom';

const Body = () => {
    
    
    return (
        <div className='overflow-y-hidden'>
            <Login/>
            <Outlet/>
        </div>
    )
}

export default Body