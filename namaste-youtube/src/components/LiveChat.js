import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utlils/chatSlice'
import { nanoid } from 'nanoid'
import { faker } from '@faker-js/faker'
// API polling
const LiveChat = () => {
  const dispatch=useDispatch()
  const chat=useSelector(store=>store.chat.message)
  useEffect(()=>{
    
    const i=setInterval(()=>{
      dispatch(addMessage({
        id:nanoid(),
        name:faker.person.fullName(),
        message:faker.lorem.sentence()
      }))
    },1400)
    console.log(chat)
    return ()=> clearInterval(i)
  })
  return (
    // flex-col-reverse to make the chat come from bottom
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-200 rounded-md overflow-y-auto
    flex flex-col-reverse'>
      {
        chat.map((item)=> 
          <ChatMessage key={item.id} name={item.name} message={item.message}/>
        )
      }
    </div>
  )
}

export default LiveChat