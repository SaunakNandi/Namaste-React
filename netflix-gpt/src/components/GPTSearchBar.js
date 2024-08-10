import React from 'react'
import lang from '../utils/LanguageConstants'
import { useSelector } from 'react-redux'
const GPTSearchBar = () => {

  const langKey=useSelector(store=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type="text" className='p-2 m-1 col-span-10' 
            placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className="py-2 px-4 rounded-lg bg-red-600
             text-white col-span-2 m-2">{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar