import React from 'react'

const VideoCard = ({video}) => {
    console.log(video)
    const {snippet, statistics}=video
    const {channelTitle, title, thumbnails}=snippet
  return (
    <div className='p-2 m-2 w-80 shadow-md'>
        <img src={thumbnails.medium.url} alt="" className='rounded-lg'/>
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
    </div>
  )

  
}

export default VideoCard