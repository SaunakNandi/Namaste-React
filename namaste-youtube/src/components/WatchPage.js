import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utlils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'

const WatchPage = () => {

    const [searchParams]=useSearchParams()
    // console.log(searchParams)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    })
    return (
        <div className='felx flex-col'>
            <div className='px-5'>
                <iframe width="1262" height="600" 
                src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>
            </div>
            <CommentContainer/>
        </div>
    )
}

export default WatchPage