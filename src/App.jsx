import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import HorizontalCard from './HorizontalCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-8 ">
        <Header />
        <Carousel />
        <HorizontalCard title={"Tratamento de Cabelos"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate facere dolores consequuntur consequatur. Sit saepe commodi itaque excepturi autem voluptates eveniet ipsam, maxime consectetur optio nemo neque, nobis doloribus mollitia."} />
        <HorizontalCard reverse={true} title={"Sombrancelhas"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate facere dolores consequuntur consequatur. Sit saepe commodi itaque excepturi autem voluptates eveniet ipsam, maxime consectetur optio nemo neque, nobis doloribus mollitia."} />
        <HorizontalCard title={"Cilios"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate facere dolores consequuntur consequatur. Sit saepe commodi itaque excepturi autem voluptates eveniet ipsam, maxime consectetur optio nemo neque, nobis doloribus mollitia."} />
        {/* <h1 className="text-3xl text-white bg-cyan-200">Hello World</h1> */}
      </div>


    </>
  )
}

export default App
