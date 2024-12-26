import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Products from '../pages/Products';
import NPF from './NPF';
import ProductsDetails from '../pages/ProductsDetails';
const Nav = () => {
return (
    <div>
            <nav>
                 <ul>
                            <h1 className='Brand '>Brand Name</h1>
                            <div className="nav-links">
                            <NavLink className={(e)=> e.isActive?"Active":"inactive"} to="/">Home</NavLink>
                            <NavLink className={(e)=> e.isActive?"Active":"inactive"} to="/about">About</NavLink>
                            <NavLink className={(e)=> e.isActive?"Active":"inactive"} to="/services">Services</NavLink>
                            <NavLink className={(e)=> e.isActive?"Active":"inactive"} to="/contact">Contact</NavLink>
                            </div>
                           
                 </ul>
            </nav>
            <style >{`
            .Active {
                    color: red;
                    text-decoration: underline;
                    
            }
            .inactive {
                    text-decoration: none;
                    
            }
            `}</style>
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id" element={<ProductsDetails/>}/>
            <Route path='*' element={<NPF/>}/>
    </Routes>
    </div>
)
}

export default Nav



