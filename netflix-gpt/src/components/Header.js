import React, {useEffect} from 'react'
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../store/userSlice';
import { addUser } from '../store/userSlice'

const Header = () => {
  const {pathname}=useLocation()
  // console.log(pathname)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user=useSelector(store=>store.user)
  
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
    <div className='w-full absolute px-8 py-2 bg-gradient-to-b from-blue-950 flex justify-between'>
        <img className='w-44'
        src={'./Netflix_Logo_PMS.png'} alt="Netflix" />
        {
          user && (
            <div className="flex">
          {/* {console.log(user && user.photoURL)} */}
          <img className='w-12 h-12' src={user?.photoURL} alt="ser" />
          <button onClick={handleSignOut} className='font-bold text-white m-1'>
            { (pathname!=='/') && <span>(Sign Out)</span>}
          </button>
        </div>)
        }
    </div>
  )
}

export default Header