import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { resObj } from '../utlis/mock_data'
const Body = () => {
  const [listOfRestaurants,setListOfRestaurants]=useState([])

  useEffect(()=>{
    const fetchData=async()=>{
      const data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4929423&lng=88.2716659&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
      const json=await data.json()
      console.log(json.data.cards)
      setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants)
    }
    fetchData()
  },[])

  // if(listOfRestaurants.length===0)
  //   return <h1>Loading</h1>

  return (listOfRestaurants.length > 0) ? (
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
  ) : (<h1>Loading...</h1>)
}

export default Body