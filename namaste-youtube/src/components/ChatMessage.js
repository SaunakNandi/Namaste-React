import React from 'react'
import profile from '../assets/profile.svg'
const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-md p-2 pr-0'>
        <img src={profile} className="h-[3vh]" alt="profile" />
        <span className='w-1/4 font-semibold mx-3'>{name}</span>
        <span className='w-1/2 text-sm'>{message}</span>
    </div>
  )
}

export default ChatMessage