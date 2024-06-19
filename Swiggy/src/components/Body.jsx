import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { resObj } from '../utlis/mock_data'
const Body = () => {
  const [listOfRestaurants,setListOfRestaurants]=useState(resObj)
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