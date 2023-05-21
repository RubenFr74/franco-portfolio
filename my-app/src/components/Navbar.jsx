import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from "../assets/logo2.png"

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#023262] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:"50px"}}/>
        </div>

        {/* Menu */}
        <div>
            <ul className='flex'>
                <li>Home</li>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </div>
        {/* Hamburger Menu */}
        <div className='hidden'>
          <FaBars />
        </div>
        {/* Mobile Menu */}
        <ul className='hidden'>
          <li>Home</li>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>



        {/* Social Links */}
        <div></div>
    </div>
  )
}

export default Navbar