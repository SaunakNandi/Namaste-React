import React from 'react'
import Button from './Button'

const ButtonList = () => 
{
  return (
    <div className='flex justify-center mt-5'>
      {
        ["All","Gaming","Songs","Live","Sports","Entertainment","News","Valentines"].map((item)=>(
          <Button name={item}/>
        ))
      } 
    </div>
  )
}

export default ButtonList