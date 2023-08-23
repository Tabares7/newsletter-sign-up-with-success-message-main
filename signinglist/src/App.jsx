import { useState } from 'react'
import './App.css'
import Layout from './assets/components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' bg-gray-50'>
      <Layout/>
    </div>
  )
}

export default App
