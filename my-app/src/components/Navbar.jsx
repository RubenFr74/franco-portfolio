import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from "../assets/logo2.png"

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#023262] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:"50px"}}/>
        </div>
        <div>
            <ul>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar