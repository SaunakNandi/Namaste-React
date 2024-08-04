import React, {useEffect} from 'react'
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../store/userSlice';

const Header = () => {
  const {pathname}=useLocation()
  // console.log(pathname)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user=useSelector(store=>store.user)

  // It may happen that our header loads multiple times and each time it loads useEffect will be called and when the useEffect will be called onAuthStateChanged will get triggered. But the problem is when the component will get unmount, onAuthStateChanged will still be there. So what I want is, when the component get unmount I will unsubscribe onAuthStateChanged

  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        // This will be executed when the user Sign In/Sign Up
        // console.log(user)
        if (user) 
        {
          // console.log(user)
          const {uid,email,displayName,photoURL} = user
          dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}))
          navigate('/browse')
        } else {
          dispatch(removeUser())
          navigate('/')
        }
      });

      return ()=> unsubscribe()
    },[])
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      dispatch(removeUser())
      navigate('/')
    }).catch((error) => {
      console.log(error)
      navigate('/error')
    });
  }
  
  return (
    <div className='w-full absolute px-8 py-2 bg-gradient-to-b from-blue-950 flex justify-between z-10
    '>
        <img className='w-44'
        src={'./Netflix_Logo_PMS.png'} alt="Netflix" />
        {
          user && (
            <div className="flex">
          {/* {console.log(user && user.photoURL)} */}
          <img className='w-12 h-12 mt-2' src={user?.photoURL} alt="ser" />
          <button onClick={handleSignOut} className='font-bold text-white m-1'>
            { (pathname!=='/') && <span>(Sign Out)</span>}
          </button>
        </div>)
        }
    </div>
  )
}

export default Header