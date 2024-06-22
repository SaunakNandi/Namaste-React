import { useState } from 'react'
import food_logo from '../assets/food_logo.webp'


export const Header = () => {
  const [btnname,setBtnname]=useState('login')
  return (
    <div className='header'>
        <div className="logo-container">
            <img className='logo' src={food_logo} alt="" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <button className='login'
                onClick={()=>setBtnname(prev=> prev==='login'?'logout':'login')}>{btnname}</button>
            </ul>
        </div>
    </div>
  )
}

export default Header