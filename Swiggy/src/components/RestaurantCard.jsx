import React from 'react'

const RestaurantCard = ({resName,cuisine}) => {
  return (
    <div className='res-card' style={{ backgroundColor: '#f0f0f0'}}>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/e0vvulfbahjxjz6k4uwi" alt="res-logo"
        className='res-logo'/>
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>4.4 star</h4>
        <h4>38 minutes</h4>
    </div>
  )
}

export default RestaurantCard