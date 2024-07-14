import { useContext, useState } from 'react'
import food_logo from '../assets/food_logo.webp'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utlis/useOnlineStatus'
import UserContext from './UserContext'
import { useSelector } from 'react-redux'

export const Header = () => {
  const [btnname,setBtnname]=useState('login')
  const onLineStatus=useOnlineStatus()
  const {loggedInUser}=useContext(UserContext)

  // subscribinng to the store using a useSelector()
  const cartItems=useSelector((state)=>state.cart.items)

  return (
    <div className='flex justify-between bg-pink-200 shadow-lg'>
        <div className="logo-container">
            <img className='w-56' src={food_logo} alt="" />
        </div>
        <div className="flex items-center ">
            <ul className='flex p-4 m-4'>
                <li className='px-4'>Online Status: {onLineStatus? "✅":"🌐"}</li>
                <li className='px-4'><Link to='/'>Home</Link></li>
                <li className='px-4'><Link to='/about'>About Us</Link></li>
                <li className='px-4'><Link to='/contact'>Contact Us</Link></li>
                <li className='px-4'><Link to='/grocery'>Grocery</Link></li>
                <li className='px-4 font-bold text-xl'>
                  <Link to='/cart'>
                    Cart <sup className='p-2 border border-solid border-orange-500'>{cartItems.length}</sup>
                  </Link> 
                </li>
                <button className='login'
                onClick={()=>setBtnname(prev=> prev==='login'?'logout':'login')}>{btnname}</button>
                <li className='px-4 font-bold'>{loggedInUser}</li>
            </ul>
        </div>
    </div>
  )
}

export default Header