import React,{useEffect} from 'react'
import Login from './Login'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../store/userSlice';
import { Outlet, useNavigate } from 'react-router-dom';

const Body = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          // This will be executed when the user Sign In/Sign Up
          if (user) {
            const {uid,email,displayName} = user
            dispatch(addUser({uid:uid,email:email,username:displayName}))
            navigate('/browse')
        } else {
            dispatch(removeUser())
            navigate('/')
          }
        });
      },[])
    
    return (
        <div className='overflow-y-hidden'>
            <Login/>
            <Outlet/>
        </div>
    )
}

export default Body