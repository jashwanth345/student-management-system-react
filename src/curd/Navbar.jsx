import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <nav id='navBlock'>
        <ul className='listBlock'>
            <NavLink to={"/"}>
                <li>Home</li>
            </NavLink>
            <NavLink to={"/viewall"}>
                <li>View All</li>
            </NavLink>
        </ul>
    </nav>
    </>
  )
}

export default Navbar