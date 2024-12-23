import React from 'react'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Products from './component/Products'
import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App
