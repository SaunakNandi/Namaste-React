import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../store/movieSlice'
import { API_OPTIONS } from '../utils/constants'
const usePopularMovies = () => {
     // fetch data from TMDB api and update store
  const dispatch=useDispatch()
  const getPopularMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    .then(response => response.json())
    .catch(err => console.error(err));
    // console.log(data);
    dispatch(addPopularMovies(data.results))
  }
  useEffect(()=>{
      getPopularMovies()
  },[])
}

export default usePopularMovies