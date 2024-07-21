import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utlils/constants'
import VideoCard, { AddvertisedVideoCard } from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [videos,setVideos]=useState([])
  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API)
    const json=await data.json()
    // console.log(json.items)
    setVideos(json.items)
  }
  useEffect(()=>{
    getVideos()
  },[])
  return (
    <div className='flex flex-wrap mx-[5%] items-center'>
      {videos[0] && <AddvertisedVideoCard video={videos[0]}/>}
      {
        videos.map((item)=>{
          return (
            <Link to={'/watch?v='+ item.id}>
              <VideoCard key={item.id} video={item}/>
            </Link>
          )
        })
      }
      
    </div>
  )
  
}

export default VideoContainer