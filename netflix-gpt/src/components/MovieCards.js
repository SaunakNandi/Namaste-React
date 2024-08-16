import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCards = ({poster_path}) => {
  if(!poster_path) return null;
  return (
    <div className='min-w-48 mx-2 my-5'>
      <img src={IMG_CDN_URL+poster_path} alt="" />
    </div>
  )
}

export default MovieCards