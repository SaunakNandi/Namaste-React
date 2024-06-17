import React from 'react'
import RestaurantCard from './RestaurantCard'

const Body = () => {
  return (
    <div className='body'>
        <div className="search">Search</div>
        <div className="res-container">
            {/* Restaurant Card */}
            <RestaurantCard resName="Meghana Food" cuisine="North Indian" />
        </div>
    </div>
  )
}

export default Body