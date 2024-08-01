import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
const Login = () => {

    const [isSignInForm,setIsSignInForm]=useState(true)
    const [errorMessage,setErrorMessage]=useState(null)
    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleButtonClick=()=>{
        // validate the form data

        const checkMessage=checkValidData(email.current.value,password.current.value)
        // console.log(checkMessage)
        setErrorMessage(checkMessage)

        if(checkMessage) return
        if(!isSignInForm)
        {
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed up 
                // console.log(userCredential)
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    // Profile updated!
                    // auth.currentUser has the updated value
                    const {uid,email,displayName,photoURL} = auth.currentUser
                    dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}))
                    navigate('/browse')
                  }).catch((error) => {
                    // An error occurre
                    setErrorMessage(error.message)
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+' - '+errorMessage)
            });
        }
        else
        {
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user)
                navigate('/browse')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+' - '+errorMessage)
            });
        }
        
    }
    
    return (
        <div className='relative w-full'>
            <Header/>
            <div className='w-full h-[100vh]'
            style={{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.3),rgba(0,0,0,.8)),url('https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_small.jpg')`,
        backgroundPosition: `top`,backgroundSize: `cover`,backgroundRepeat:'no-repeat'}}>
                
                <form className='absolute p-12 bg-black left-0 right-0 mx-auto w-1/4 top-[15%] flex flex-col
                text-white bg-opacity-70'
                onSubmit={(e)=>{
                    e.preventDefault()
                }}>
                    <h2 className='text-2xl font-semibold mb-10'>{
                        isSignInForm ? 'Sign In' : 'Sign Up'
                    }</h2>
                    {
                        !isSignInForm && <input type="text"
                        ref={name} placeholder='username' className='p-2 m-2 bg-black bg-opacity-50'/>
                    }
                    <input type="email" placeholder='email' className='p-2 m-2 bg-black bg-opacity-50'
                    ref={email}/>
                    <input type="password" placeholder='password' className='p-2 m-2 bg-black bg-opacity-50'
                    ref={password}/>
                    <p className='text-red-500'>{errorMessage && errorMessage}</p>
                    <button className="p-3 m-2 text-xl bg-red-500 text-white rounded-sm"
                    onClick={handleButtonClick}>{
                        isSignInForm ? 'Sign In' : 'Sign Up'
                    }</button>
                    <p className="py-4">
                        { isSignInForm? 'New to Netflix?':'Already have an account?' }
                        <span className='ml-2 cursor-pointer'
                         onClick={()=>setIsSignInForm((prev)=>!prev)}>{
                            isSignInForm ? 'Sign Up' : 'Sign In Now'
                        }</span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login