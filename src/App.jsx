import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="m-auto md:m-30 md:max-w-full">
        <Header />
        <Carousel />
        {/* <h1 className="text-3xl text-white bg-cyan-200">Hello World</h1> */}
      </div>


    </>
  )
}

export default App
