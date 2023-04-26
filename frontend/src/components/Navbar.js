import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import ProfileMenu from './ProfileMenu'

function Navbar() {
  return (
    <nav className='relative container mx-auto m-b-10 px-20 py-2 box-shadow-lg text-white'>
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="pt-2">
          <img src={logo} alt="logo" className="w-24" />
        </Link>
        
        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          <Link className='hover:text-red-500' to="/">Home</Link>
          <Link className='hover:text-red-500' to="/contact">Contact</Link>
          <Link className='hover:text-red-500' to="/about">About</Link>
        </div>

        {/* Profile */}
        <div>
          <ProfileMenu />
        </div>

      </div>  
    </nav>
  )
}

export default Navbar