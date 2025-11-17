import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home1 from './pages/Home1'
import Navbar from './componenet/navbar'
import Anime from './pages/Anime'
import About from './pages/About'
import "./pages/anime.css"
import AnimeDetails from './pages/AnimeDetails'

function App() {
  
  return (
    <>
    <Navbar />
   <Routes>
      <Route 
      path='/'
      element={<Home1 />}/>
    <Route 
      path='/Anime'
      element={<Anime />}/>
      <Route 
      path='/About'
      element={<About />}/>
      <Route path="/anime/:slug" element={<AnimeDetails/>}/>

   </Routes>
   </>
  )
}

export default App;