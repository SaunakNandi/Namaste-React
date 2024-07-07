import React, { useEffect, useState } from 'react'
import { CDN_URL } from '../utlis/constants'
import { Link } from 'react-router-dom'
const RestaurantCard = ({resData}) => 
{
  const [displayText,setDisplayText]=useState('')
  // console.log(resData)
  useEffect(()=>{
    const generateText=()=>{                                                   
      let results=resData.info.cuisines.join(', ')
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
    <Link to={`restaurant/${resData.info.id}`} className='m-4 p-1 w-[250px] h-[360px] ml-7 mt-8 rounded-md hover:bg-gray-400 '>
        <img src={CDN_URL+resData.info.cloudinaryImageId} alt="res-logo"
        className='res-logo'/>
        <h3 className='font-semibold py-1'>{truncateText(resData.info.name)}</h3>
        <div >
        {displayText}
        </div>
        <h4>{resData.info.avgRating}</h4>
        <h4>{resData.info.costForTwo}</h4>
    </Link>
  )
}

export default RestaurantCard