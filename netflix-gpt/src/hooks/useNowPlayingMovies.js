import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../store/movieSlice'
import { API_OPTIONS } from '../utils/constants'
const useNowPlayingMovies = () => {
     // fetch data from TMDB api and update store
  const dispatch=useDispatch()
  const getNowPlayingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    .then(response => response.json())
    .catch(err => console.error(err));
    // console.log(data);
    dispatch(addNowPlayingMovies(data.results))
  }
  useEffect(()=>{
      getNowPlayingMovies()
  },[])
}

export default useNowPlayingMovies