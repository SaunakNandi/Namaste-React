import React, { useEffect, useState } from 'react'

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
  return (
    <div className='res-card' style={{ backgroundColor: '#f0f0f0'}}>
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`} alt="res-logo"
        className='res-logo'/>
        <h3 className='name'>{resData.info.name}</h3>
        <div >
        {displayText}
        </div>
        <h4>{resData.info.avgRating}</h4>
        <h4>{resData.info.costForTwo}</h4>
    </div>
  )
}

export default RestaurantCard