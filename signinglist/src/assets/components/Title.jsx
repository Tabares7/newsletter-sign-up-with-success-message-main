import React, { Children } from 'react'

export const Title = ({text}) => {
  return (
    <h1 className='text-4xl font-semibold md:text-6xl'>{text}</h1>
  )
}
