import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title,movies}) => {
    // console.log(movies)
  return (
    <div className='bg-transparent'>
        <div className="px-6 text-white">
            <h1 className='text-3xl font-semibold py-5'>{title}</h1>
            <div className="flex overflow-x-auto">
                
                    <div className="flex justify-evenly">
                        {
                            movies && movies.map((movie)=>(
                                <MovieCards key={movie.id}
                                 poster_path={movie.poster_path}/>
                            ))
                        }
                    </div>
                        
            </div>
        </div>
    </div>
  )
}

export default MovieList