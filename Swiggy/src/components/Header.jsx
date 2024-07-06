import { useState } from 'react'
import food_logo from '../assets/food_logo.webp'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utlis/useOnlineStatus'

export const Header = () => {
  const [btnname,setBtnname]=useState('login')
  const onLineStatus=useOnlineStatus()
  return (
    <div className='header'>
        <div className="logo-container">
            <img className='logo' src={food_logo} alt="" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Online Status: {onLineStatus? "✅":"🌐"}</li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li><Link to='/grocery'>Grocery</Link></li>
                <li>Cart</li>
                <button className='login'
                onClick={()=>setBtnname(prev=> prev==='login'?'logout':'login')}>{btnname}</button>
            </ul>
        </div>
    </div>
  )
}

export default Header