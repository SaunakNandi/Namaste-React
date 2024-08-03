import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className="my-1 flex ">
            <button className='bg-green-500 text-black rounded-md 
            p-3 px-10 text-xl flex bg-opacity-10'>Play
                <img src="./play-circle.svg" className='mt-2 ml-1' alt="" />
            </button>
            <button className='ml-2 bg-green-500 text-black rounded-md 
            p-3 px-10 text-xl flex bg-opacity-10'>More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle