import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'
import ReactPlayer from 'react-player'
const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId)
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
  return trailerVideo && (
    <div>
        <ReactPlayer controls height={800} width={1500} 
        url={`https://www.youtube.com/watch?v=${trailerVideo?.key}`}/>
    </div>
  )
}

export default VideoBackground