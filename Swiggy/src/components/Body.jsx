import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { resObj } from '../utlis/mock_data'
const Body = () => {
  const [listOfRestaurants,setListOfRestaurants]=useState(resObj)

  useEffect(()=>{
    const fetchData=async()=>{
      const data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4878517&lng=88.2832182&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
      const json=await data.json()
      console.log(json)
    }
    fetchData()
  },[])

  return (
    <div className='body'>
        <div className="filter">
          <button className="filter-btn" onClick={()=> {
            const filtered=listOfRestaurants.filter(
              res=>res.info.avgRating>4
            )
            // console.log(filtered)
            setListOfRestaurants(filtered)
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {/* Restaurant Card */}
            {
              listOfRestaurants.map((data,i)=> (
                  <RestaurantCard key={data.info.id} resData={data} />
              ))
            }
             
        </div>
    </div>
  )
}

export default Body