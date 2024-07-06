import React, { useEffect, useState } from 'react'

const useRestaurantMenu = (resId) => {
 
    const [resInfo, setResInfo] = useState(null)
    // fetch data
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4929423&lng=88.2716659&restaurantId=${resId}&submitAction=ENTER`)

        const json=await data.json()
        setResInfo(json.data)
    }
  return resInfo
}

export default useRestaurantMenu