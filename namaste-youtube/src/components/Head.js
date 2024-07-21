import React from 'react'
import list from '../assets/list.svg'
import youtube from '../assets/youtube.svg'
import search from '../assets/search.svg'
import profile from '../assets/profile.svg'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utlils/appSlice'

const Head = () => 
{
    const dispatch=useDispatch()
    const toggleMenuHandler=()=>{
        console.log('called')
        dispatch(toggleMenu())
    }
  return (
    <div className='grid grid-flow-col p-4 shadow-lg'>
        <div className="flex col-span-1 ml-4">
            <img src={list} className="h-[3vh] cursor-pointer" alt="list" 
            onClick={()=>toggleMenuHandler()}/>
            <img src={youtube} className="h-[3vh] mx-4" alt="youtube" />
        </div>
        <div className="flex col-span-10 text-center h[2vh] justify-center">
            <div className="w-1/4 border border-gray-500 border-r-0 rounded-l-xl">
                <input type="text" className='w-full border rounded-l-xl gray-400 p-1 outline-none'
                placeholder='Search'/>
            </div>
            <div className='w-[3vw] p-1 border border-gray-400 border-l-0 rounded-r-xl'>
                <img src={search} className="h-[3vh] pt-1 pl-3"/>
            </div>
        </div>
        <div className="col-span-1">
            <img src={profile} className="h-[3vh] w-full" alt="profile" />
        </div>
    </div>
  )
}

export default Head