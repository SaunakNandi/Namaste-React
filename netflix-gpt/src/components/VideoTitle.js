import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 text-white absolute bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className="my-1 flex text-white">
            <button className='bg-white rounded-md text-black 
            p-3 px-10 text-xl flex hover:bg-opacity-80'>Play
                <img src="./play-circle.svg" className='mt-1 ml-1' alt="" />
            </button>
            <button className='ml-2 bg-gray-500 rounded-md 
            p-3 px-10 text-xl flex bg-opacity-50'>More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle