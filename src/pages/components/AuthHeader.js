import React from 'react'

function AuthHeader({text}) {
  return (
    <div className='font-gotham 
    text-[20px]
    text-dark 
    font-gotham700
    leading-[25px]
    md:text-[26px]'>
        {text}
    </div>
  )
}

export default AuthHeader