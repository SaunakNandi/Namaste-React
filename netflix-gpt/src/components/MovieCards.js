import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCards = ({poster_path}) => {
  return (
    <div className='min-w-48 mx-2 my-5'>
      <img src={IMG_CDN_URL+poster_path} alt="" srcset="" />
    </div>
  )
}

export default MovieCards