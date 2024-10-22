import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    < >
     
     
    <div className='navbar-main'>
    <div>
          <h3>Pasted</h3>
      </div>
    <div className='navbar'>
        <NavLink className='link' to='/'>Home</NavLink>
  
        <NavLink className='link' to='/pastecreate'>Paste create</NavLink>
        <NavLink className='link' to='/pastes'>Pastes List</NavLink>
  </div>
    </div>
    
    </>
  
  )
}

export default Navbar
