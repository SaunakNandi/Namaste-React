import React, { useEffect, useState } from 'react'
import list from '../assets/list.svg'
import youtube from '../assets/youtube.svg'
import search from '../assets/search.svg'
import profile from '../assets/profile.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utlils/appSlice'
import {YOUTUBE_SEARCH_API} from '../utlils/constants'
import { cacheResults } from '../utlils/searchSlice'


// I

const Head = () => 
{
    const [searchQuery,setSearchQuery]=useState("")
    const [suggestions,setSuggestions]=useState([])
    const [showSuggestion,setShowSuggestions]=useState(false)
    const searchCache=useSelector(store=> store.search)
    const dispatch=useDispatch()
    const toggleMenuHandler=()=>{
        console.log('called')
        dispatch(toggleMenu())
    }
    useEffect(()=>{

        // Implementing Debouncing

        // make an api call after every key press
        // but if the difference between 2 API calls is <200ms decline the API call

        const timer=setTimeout(()=>{

            // Implementing Cache concept
            if(searchCache[searchQuery])
            {
                setSuggestions(searchCache[searchQuery])
            }
            else
                getSearchSuggestions()
        },200)

        return ()=>clearTimeout(timer)  // called when component is unmounted
    },[searchQuery])

/** 
    * pressed key- i
    * render the component
    * useEffect()
    * start timer => make api call after 200ms
    * 
    * pressed key - ip
    * destroy the prev component (useEffect return is called)
    * re-render the component
    * useEffect()
    * start timer => make api call after 200ms
**/


    const getSearchSuggestions=async()=>{
        const data=await fetch(YOUTUBE_SEARCH_API+searchQuery)
        const json=await data.json()
        // console.log(json[1])
        setSuggestions(json[1])
        dispatch(cacheResults({
            [searchQuery]:json[1]
        }))
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
                placeholder='Search'
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus={()=>setShowSuggestions(true)}
                onBlur={()=>setShowSuggestions(false)}/>
            </div>
            <div className='w-[3vw] p-1 border border-gray-400 border-l-0 rounded-r-xl'>
                <img src={search} className="h-[3vh] pt-1 pl-3"/>
            </div>
            {
                showSuggestion && suggestions.length>0 ?(
                <div className="fixed top-[7vh] bg-white py-2 px-5 w-1/4 shadow-lg border-slate-300 rounded-b-md">
                    <ul>
                        {
                            suggestions && (
                                suggestions.map((title)=>(
                                    <li key={title} className='p-1 border-b-2 hover:bg-slate-300
                                    cursor-pointer'>{title}</li>
                                ))
                            )
                        }
                    </ul>
                </div>
                ):<></>
            }
        </div>
        <div className="col-span-1">
            <img src={profile} className="h-[3vh] w-full" alt="profile" />
        </div>
    </div>
  )
}

export default Head