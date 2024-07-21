import React, { useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utlils/constants'

const VideoContainer = () => {

  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API)
    const json=await data.json()
    console.log(json)
  }
  useEffect(()=>{
    getVideos()
  })
  return (
    <div >
        
    </div>
  )
}

export default VideoContainer