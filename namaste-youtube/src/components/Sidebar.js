import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen=useSelector(store => store.app.isMenuOpen)
  if(!isMenuOpen) return null

  // Early return
  return (
    <div className='p-5 shadow-lg col-span-1 w-[12vw]'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Movie</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <hr/>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Explore</h1>
      <hr/>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learning</li>
        <li>Fashion & Beauty</li>
      </ul>
    </div>
  )
}

export default Sidebar