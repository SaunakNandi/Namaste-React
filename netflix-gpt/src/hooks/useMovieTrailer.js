import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../store/movieSlice'
import { API_OPTIONS } from '../utils/constants'
const useMovieTrailer = (movieId) => {
  // fetch trailer video
  const dispatch=useDispatch()
  const trailerVideo=useSelector(store=> store.movies.trailerVideo)
  const getMovieVideos=async()=>{
    // We have kept API token in a constant file so that if in future API token expires or changes then we can do it from one place 
    const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS)
    const video=await data.json()
    // console.log(video.results)

    const filtredData=video.results.filter(x=> x.type==='Trailer')[0]
    const trailer=filtredData.length ? filtredData[0]:video.results[0]
    dispatch(addTrailerVideo(trailer))
  }
  useEffect(()=>{
    !trailerVideo && getMovieVideos()
  },[])
}

export default useMovieTrailer