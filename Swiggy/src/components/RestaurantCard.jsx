import React, { useContext, useEffect, useState } from 'react'
import { CDN_URL } from '../utlis/constants'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'

const  RestaurantCard = ({resData}) => 
{
  const {loggedInUser}=useContext(UserContext)
  const [displayText,setDisplayText]=useState('')
  // console.log(resData)
  useEffect(()=>{
    const generateText=()=>{                                                   
      let results=resData.cuisines.join(', ')
      if(results.length>30)
        results=results.substring(0,30)+'...'
      return results
    }
    setDisplayText(generateText())
  },[])
  const truncateText=(name)=>{
    if(name.length>27)
      return name.substring(0,27)+'...'
    return name
  }
  return (
    <>
        <img src={CDN_URL+resData.cloudinaryImageId} alt="res-logo"
        className='res-logo'/>
        <h3 className='font-semibold py-1'>{truncateText(resData.name)}</h3>
        <div >
        {displayText}
        </div>
        <h4>{resData.avgRating}</h4>
        <h4>{resData.costForTwo}</h4>
        <h4>User: {loggedInUser}</h4>
    </>
  )
}

// HOC
// input - RestaurantCard => RestaunrantCardPromoted
export const withPromotedLabel=(RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard