import React from 'react'

const Button = ({text}) => {
  return (
    <button className='rounded-lg bg-blue-950 p-4 text-gray-200'> 
    {text}
    </button>
  )
}

export default Button