import React from 'react'

function Card({children}) {
  return (
    <div 
    className='w-full 
    md:w-[568px] 
    bg-white 
    shadow-authcard
    rounded-[10px]'>
      <div className='w-full px-[34px] py-10'>
        {children}
      </div>
    </div>
  )
}

export default Card