import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Nav() {
return (
    <nav>
        <NavLink className={(e) => e.isActive ? 'active' : 'inactive'} to="/">Home</NavLink>
        <NavLink className={(e) => e.isActive ? 'active' : 'inactive'} to="/about">About</NavLink>
        <NavLink className={(e) => e.isActive ? 'active' : 'inactive'} to="/contact">Contact</NavLink>
        <NavLink className={(e) => e.isActive ? 'active' : 'inactive'} to="/products">Products</NavLink>
        <style jsx>{`
        .active {
            color: red;
        }
        `}</style>
    </nav>
)
}

export default Nav
