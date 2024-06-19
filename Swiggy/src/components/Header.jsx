import food_logo from '../assets/food_logo.webp'


export const Header = () => {
  return (
    <div className='header'>
        <div className="logo-container">
            <img className='logo' src={food_logo} alt="" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </div>
    </div>
  )
}

export default Header