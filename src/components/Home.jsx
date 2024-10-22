import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      
      <h1 className='home-h1'>Your Personal Cloud-based Notepad Capture, Organize, and Access Your Notes Anytime, Anywhere</h1>
      <NavLink className='button' to='/pastecreate'>Create Paste</NavLink>
      
    </div>
  )
}

export default Home
