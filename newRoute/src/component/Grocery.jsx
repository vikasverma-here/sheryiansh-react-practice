import React from 'react'

const Grocery = () => {
  return (
    <div>
       <h1>Catagoryies </h1>
    <ul>
        <NavLink to="/fashion/man" >Man</NavLink>
        <NavLink to="/fashion/woman" >woman</NavLink>
        <NavLink to="/fashion/child">Child</NavLink>
        <NavLink to="/fashion/boy">boy</NavLink>
    </ul>
    </div>
  )
}

export default Grocery
