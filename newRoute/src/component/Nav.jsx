import React from 'react'
import { NavLink, Routes } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
     <nav>
     <NavLink className={(e)=> e.isActive?"Active":"inactive"} to="/">Home</NavLink>
        <NavLink className={(e)=> e.isActive?"Active":"inactive"} to="/fashion">Fashion</NavLink>
        <NavLink className={(e)=> e.isActive?"Active":"inactive"} to="/homeandfurneatures">Home and Furneatures</NavLink>
        <NavLink className={(e)=> e.isActive?"Active":"inactive"} to="/grocery">Grocery</NavLink>
        <NavLink className={(e)=> e.isActive?"Active":"inactive"} to="/mobile">Mobile</NavLink>
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
      
    </div>

   
  )
}

export default Nav
