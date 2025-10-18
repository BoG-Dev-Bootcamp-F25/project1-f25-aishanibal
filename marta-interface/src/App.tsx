import { useState } from 'react'
import Nav from './components/Nav'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <div className = "sticky top-0 z-50">
     <Nav></Nav>
    </div>
     <Outlet></Outlet>
    </>
  )
}

export default App
