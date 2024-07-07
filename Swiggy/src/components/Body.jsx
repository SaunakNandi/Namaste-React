import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import useOnlineStatus from '../utlis/useOnlineStatus'
const Body = () => {
  const [listOfRestaurants,setListOfRestaurants]=useState([])
  const [filteredRestaurant,setFilteredRestaurant]=useState([])
  const [error,setError]=useState()
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

  const onlineStatus=useOnlineStatus()
  if(onlineStatus===false)
    return <h1>Looks like you're Offline!! Please check you internet connection</h1>

  
  // useEffect(()=>{
  //   setListOfRestaurants(listOfRestaurants.filter((item)=>item.info.name.toLowerCase().includes(searchText.toLowerCase())))
  // },[searchText])

  return (listOfRestaurants.length > 0) ? (
    <div className='body'>
        <div className="filter flex">
          <div className="m-4 p-4">
            <input type="text" className='border border-solid border-black' value={searchText} 
            onChange={(e)=>setSearchText(e.target.value)}/>
            <button
            className='p-2 rounded-md bg-green-100 m-4'
            onClick={()=>{ 
              const filtered_result=listOfRestaurants.filter((item)=>item.info.name.toLowerCase().includes(searchText.toLowerCase()))
              setFilteredRestaurant(filtered_result)
            }}>Search</button>
          </div>
          <div className="m-4 p-4">
            <button className="px-4 py-2 bg-gray-200 rounded" onClick={()=> {
              const filtered=filteredRestaurant.filter(
                res=>res.info.avgRating>4
              )
              // console.log(filtered)
              setFilteredRestaurant(filtered)
            }}>Top Rated Restaurants</button>
          </div>
        </div>
        <div className="flex flex-wrap">
        {/* {console.log(listOfRestaurants)}
        {console.log(filteredRestaurant)} */}
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