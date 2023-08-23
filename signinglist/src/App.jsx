import { useState } from 'react'
import './App.css'
import Layout from './assets/components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Layout/>
    </div>
  )
}

export default App
