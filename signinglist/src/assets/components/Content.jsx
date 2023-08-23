import React from 'react'
import { Title } from './Title'
import Fact from './Fact'

const Content = () => {
  return (
    

    // Join 60,000+ product managers receiving monthly updates on:
    
    // Product discovery and building what matters
    // Measuring to ensure updates are a success
    // And much more!
    <div className="flex flex-col gap-5 p-8">
        <Title text="Stay updated!"/>
        <p className='pb-4'>
        Join 60,000+ product managers receiving monthly updates on:
        </p>
        <Fact content="Product discovery and building what matters"/>
        <Fact content="Measuring to ensure updates are a success"/>
        <Fact content="And much more!"/>
        

    </div>
  )
}

export default Content