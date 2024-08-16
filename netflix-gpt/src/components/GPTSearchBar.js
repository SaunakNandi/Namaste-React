import React, { useRef } from 'react'
import lang from '../utils/LanguageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/OpenAI'
import { API_OPTIONS } from '../utils/constants'
import { addGPTMovieResult } from '../store/gptSlice'


const GPTSearchBar = () => {

  const langKey=useSelector(store=>store.config.lang)
  const searchText=useRef(null)
  const dispatch=useDispatch()
  // Search movie in TMDB
  const searchMovieTMDB=async(movie)=>{
    const data=await fetch(`https://api.themoviedb.org/3/search/movie?query=`+movie+`&include_adult=false&language=en-US&page=1`,API_OPTIONS)

    const json=await data.json()
    return json.results  //return promise
  }

  const handleGPTSearchClick=async()=>{
    
    // Make an API call to GPT API and get Movie Results 

    const gptQuery='Act as a movie recommendation system and suggest some movies for the query'+
                    searchText.current.value+". Only give me names of 8 movies, comma separated list"
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });
    if(!gptResult.choices){
      console.warn(gptResult.choices)
      return
    }
    // console.log(gptResult.choices?.[0]?.message?.content)
    const gptMovies=gptResult.choices?.[0]?.message?.content.split(', ')

    // for each  movie I will search TMDB API
    const promiseArray=gptMovies.map(movie=>searchMovieTMDB(movie))
    const tmdbResults=await Promise.all(promiseArray)
    
    dispatch(addGPTMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))
  }
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'
        onSubmit={e=>e.preventDefault()}>
            <input type="text" className='p-2 m-1 col-span-10'
            ref={searchText} 
            placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className="py-2 px-4 rounded-lg bg-red-600
             text-white col-span-2 m-2"
             onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar