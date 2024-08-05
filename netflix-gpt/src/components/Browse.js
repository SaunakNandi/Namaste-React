import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { MainContainer } from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'

const Browse = () => {

  const showSearch=useSelector(store=>store.gpt.showSearch)
  useNowPlayingMovies()  // custom hook
  usePopularMovies()

  return (
    <div className=''>
      <Header/>
      {
        showSearch? <GPTSearch/>:(
          <>
            <MainContainer/>
            <SecondaryContainer/>
          </>
        )
      }
      
    </div>
  )
}

export default Browse