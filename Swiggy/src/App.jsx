import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import { Outlet } from 'react-router-dom'
import About from './components/About'
import UserContext from './components/UserContext'
import { Provider } from 'react-redux'
import appStore from './utlis/appStore'

function App() {

  // authentication 
  const [username,setUserName]=useState()
  useEffect(()=>{
    const data={
      name:"Bablu Dhan",
    }
    setUserName(data.name)

  },[])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:username, setUserName}}>
        <Header/>
        {/* the outlet will be filled with children according to the path on what page we are */}
        <Outlet/>  
      </UserContext.Provider>
    </Provider>
  )
}



export default App
