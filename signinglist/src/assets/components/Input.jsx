import React from 'react'

const Input = ({title, placeholder}) => {
  return (
    <div className=' mt-16'>
        <label className='text-sm font-semibold ' htmlFor='input'>{title}</label>
        <input type='mail' className='mt-2 w-full border-solid border-2 border-black-300 p-4 rounded-lg' placeholder={placeholder} alt='email' required id='input' />
    </div>
  )
}

export default Input