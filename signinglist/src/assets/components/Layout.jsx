import React from 'react'
import SVGSwitch from './SVGSwitch'
import Content from './Content'

const Layout = () => {

  return (
    <div className='flex flex-col  gap-3'>
        <SVGSwitch/>
       <Content/>
    </div>
       
    
  )
}

export default Layout