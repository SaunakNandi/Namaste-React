import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utlils/chatSlice'
import { nanoid } from 'nanoid'
import { faker } from '@faker-js/faker'
// API polling
const LiveChat = () => {
  const dispatch=useDispatch()
  const chat=useSelector(store=>store.chat.message)
  const [liveMessage,setMessage]=useState('')
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
    <>
      <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-200 rounded-md overflow-y-auto
      flex flex-col-reverse'>
        <div className="">  
          {
            chat.map((item)=> 
              <ChatMessage key={item.id} name={item.name} message={item.message}/>
            )
          }
        </div>
      </div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMessage({
          name:'Nandu',
          message:liveMessage
        }))
        setMessage('')
      }} 
      className="w-full p-2 ml-2 border border-black">
        <input className="w-3/4 border border-black p-1" type="text"
        value={liveMessage} 
        onChange={(e)=>setMessage(e.target.value)}/>
        <button
        className='m-1 ml-2 p-1 border border-black bg-green-300 rounded-md'><span>Submit</span></button>
      </form>
    </>
  )
}

export default LiveChat