import React from 'react'
import Navbar from './Components/Navbar'
import MainPage from './Components/MainPage'
import Blocks from './Components/Blocks'
import About from './Components/About'
import Advantage from './Components/Advantage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainPage/>
      <Blocks/>
      <About/>
      <Advantage/>
    </div>
  )
}

export default App