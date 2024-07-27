import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [y,setY]=useState(0)
    let x=10
    const z=useRef(0) // returns an object { current: InitalValue}
    let i
    // useEffect(()=>{
    //     i=setInterval(()=>console.log('Babludhan'),1000)
    //     return ()=> clearInterval(i) // cleanup function to clear interval when component unmounts.
    // },[])
  return (
    <div className='m-4 p-2 bg-slate-100 border border-black w-96 h-96'>
        <div className="">
            <button className="p-2 m-4 bg-green-200" 
            onClick={()=>{
                x=x+1
                console.log("x= "+x)
            }}>Increase x</button>
            <h1 className="font-bold text-xl">Let {x}</h1>
        </div>
        {/* Everytime y gets updated and the component rerender x get reset i.e x is set back to its original value
        */}
        <div className="">
            <button className="p-2 m-4 bg-green-200" 
            onClick={()=>{
                setY(y+1)
            }}>Increase Y</button>
            <h1 className="font-bold text-xl">Const {y}</h1>
        </div>
        {/* 
            Using useRef even if the component rerender value of z does not reset.
        */}
        <div className="">
            <button className="p-2 m-4 bg-green-200" 
            onClick={()=>{
                z.current=z.current+1
                console.log("ref= "+z.current)
            }}>Increase Z</button>
            <h1 className="font-bold text-xl">Ref {z.current}</h1>
        </div>
        {/* <button className="bg-red-400 p-2 -4 text-white font-semibold rounded-md"
        onClick={()=>
        {
            clearInterval(i)
        }}>
            Stop Printing
        </button> */}
    </div>
  )
}

export default UseRef