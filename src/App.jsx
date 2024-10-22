import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import PasteCreate from './components/PasteCreate'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import Home from './components/Home'


const router = createBrowserRouter(
 [
  {
    path: "/",
    element:
    <div>
        <Navbar></Navbar>
        <Home></Home>
    </div>
  },
  {
    path: "/pastecreate",
    element:
    <div>
        <Navbar></Navbar>
        <PasteCreate></PasteCreate>
    </div>
  },
  
  {
    path: "/pastes",
    element:
    <div>
         <Navbar></Navbar>
         <Paste></Paste>
    </div>
  },
  {
    path: "/pastes/:id",
    element:
    <div>
         <Navbar></Navbar>
         <ViewPaste></ViewPaste>
    </div>
  },
 ]
)

function App() {
  

  return (
    <>
      < RouterProvider router={router}/>
    </>
  )
}

export default App
