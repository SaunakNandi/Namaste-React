import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm,setIsSignInForm]=useState(true)

    
    return (
        <div className='relative w-full'>
            <Header/>
            <div className='w-full h-[100vh]'
            style={{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.3),rgba(0,0,0,.8)),url('https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_small.jpg')`,
        backgroundPosition: `top`,backgroundSize: `cover`,backgroundRepeat:'no-repeat'}}>
                
                <form className='absolute p-12 bg-black left-0 right-0 mx-auto w-1/4 top-[15%] flex flex-col
                text-white bg-opacity-70'>
                    <h2 className='text-2xl font-semibold mb-10'>{
                        isSignInForm ? 'Sign In' : 'Sign Up'
                    }</h2>
                    {
                        !isSignInForm && <input type="text" placeholder='username' className='p-2 m-2 bg-black bg-opacity-50'/>
                    }
                    <input type="email" placeholder='email' className='p-2 m-2 bg-black bg-opacity-50'/>
                    <input type="password" placeholder='password' className='p-2 m-2 bg-black bg-opacity-50'/>
                    <button className="p-3 m-2 text-xl bg-red-500 text-white rounded-sm">{
                        isSignInForm ? 'Sign In' : 'Sign Up'
                    }</button>
                    <p className="py-4">
                        { isSignInForm? 'New to Netflix?':'Already have an account?' }
                        <span className='ml-2 cursor-pointer'
                         onClick={()=>setIsSignInForm((prev)=>!prev)}>Sign up now</span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login