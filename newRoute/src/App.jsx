import React from 'react'
import Nav from './component/Nav'
import Home from './component/Home'
import Fashion from './component/Fashion'
import Grocery from './component/Grocery'
import HomeandFurneatures from './component/HomeandFurneatures'
import Mobile from './component/Mobile'
import { Routes, Route } from 'react-router-dom'
import FashionDetails from './component/FashionDetails'
const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="fashion" element={<Fashion/>} />
        <Route path="grocery" element={<Grocery/>} />
        <Route path="homeandfurneatures" element={<HomeandFurneatures/>} />
        <Route path="/fashion/:id" element={<FashionDetails/>}/>
        <Route path="/mobile" element={<Mobile/>} />
      </Routes>
    </div>
  )
}

export default App
