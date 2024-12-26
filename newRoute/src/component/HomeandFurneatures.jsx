import React from 'react'

const HomeandFurneatures = () => {
  return (
    <div>
      <h1>Home and Furnitures</h1>
    <ul>
        <NavLink to="/fashion/man" >Man</NavLink>
        <NavLink to="/fashion/woman" >woman</NavLink>
        <NavLink to="/fashion/child">Child</NavLink>
        <NavLink to="/fashion/boy">boy</NavLink>
    </ul>
    </div>
  )
}

export default HomeandFurneatures
