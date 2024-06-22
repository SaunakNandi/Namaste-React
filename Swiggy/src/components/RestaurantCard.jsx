import React, { useEffect, useState } from 'react'
import { CDN_URL } from '../utlis/constants'
const RestaurantCard = ({resData}) => 
{
  const [displayText,setDisplayText]=useState('')
  useEffect(()=>{
    const generateText=()=>{                                                   
      let results=resData.info.cuisines.join(', ')
      if(results.length>25)
        results=results.substring(0,25)+'...'
      return results
    }
    setDisplayText(generateText())
  },[])
  const truncateText=(name)=>{
    if(name.length>20)
      return name.substring(0,20)+'...'
    return name
  }
  return (
    <div className='res-card' style={{ backgroundColor: '#f0f0f0'}}>
        <img src={CDN_URL+resData.info.cloudinaryImageId} alt="res-logo"
        className='res-logo'/>
        <h3 className='name'>{truncateText(resData.info.name)}</h3>
        <div >
        {displayText}
        </div>
        <h4>{resData.info.avgRating}</h4>
        <h4>{resData.info.costForTwo}</h4>
    </div>
  )
}

export default RestaurantCard