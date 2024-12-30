import React from 'react'
import { useEffect,useState } from 'react'
import Cart from '../component/Cart'
import { getData as fectdata } from '../services/GetServices'
import Home from '../component/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from '../component/ProductDetails'
const MovieData = () => {
  const [newdata, setData] = useState([])
const getData=async()=>{
    try{
        const res = await fectdata();

        setData(res.data)
    }catch(err){
        console.log(err)

}

}
// console.log(data)
useEffect(() => {
    getData()
},[])

  return (
    <>
  
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
    </Routes>
  
    <div className='yes'>
   {newdata.map((item)=>{
    return <div className='main-content' key={item.id}> <Cart  element={item}/> </div>
   })}
    </div>

    </>
  )
}

export default MovieData;
