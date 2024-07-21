import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export const Body = () => {
  return (
    <div className='grid grid-flow-col' >
        <Sidebar/>
        <Outlet/>
    </div>
  )
}
