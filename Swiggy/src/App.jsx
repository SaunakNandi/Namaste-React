import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import { Outlet } from 'react-router-dom'
import About from './components/About'
function App() {

  return (
    <>
      <Header/>
      {/* the outlet will be filled with children according to the path on what page we are */}
      <Outlet/>  
    </>
  )
}



export default App
