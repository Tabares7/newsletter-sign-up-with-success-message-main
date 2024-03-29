import React from 'react'
import SVGSwitch from './SVGSwitch'
import Content from './Content'

const Layout = () => {

  return (
    <div className='mx-auto md:bg-paleblack md:p-32 '>

        <div className=" max-w-max md:rounded-3xl flex flex-col  gap-3  md:flex-row-reverse md:bg-white mx-auto items-center md:p-8 ">
        <SVGSwitch/>
       <Content/>
        </div>
    </div>
       
    
  )
}

export default Layout