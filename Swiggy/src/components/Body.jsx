import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { resObj } from '../utlis/mock_data'
import Shimmer from './Shimmer'
const Body = () => {
  const [listOfRestaurants,setListOfRestaurants]=useState([])
  const [filteredRestaurant,setFilteredRestaurant]=useState([])
  const [searchText,setSearchText]=useState("")

  useEffect(()=>{
    const fetchData=async()=>{
      const data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4929423&lng=88.2716659&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
      const json=await data.json()
      console.log(json.data.cards)
      setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants)
      setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants)
    }
    fetchData()
  },[])

  // useEffect(()=>{
  //   setListOfRestaurants(listOfRestaurants.filter((item)=>item.info.name.toLowerCase().includes(searchText.toLowerCase())))
  // },[searchText])

  return (listOfRestaurants.length > 0) ? (
    <div className='body'>
        <div className="filter">
          <div className="search">
            <input type="text" className='search-box' value={searchText} 
            onChange={(e)=>setSearchText(e.target.value)}/>
            <button onClick={()=>{ 
              const filtered_result=listOfRestaurants.filter((item)=>item.info.name.toLowerCase().includes(searchText.toLowerCase()))
              setFilteredRestaurant(filtered_result)
            }}>Search</button>
          </div>
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
              filteredRestaurant.map((data,i)=> (
                  <RestaurantCard key={data.info.id} resData={data} />
              ))
            }
             
        </div>
    </div>
  ) : <Shimmer/>
}

export default Body