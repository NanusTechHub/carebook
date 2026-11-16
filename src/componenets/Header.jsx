import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { FaPlusSquare } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
        <div className='logo'>
          <FaPlusSquare />
         <Link to={"/"} className='logo-brand'>CareBook</Link>
         <button className="menu-toggle" type='button' onClick={() => setOpen(!open)}>
             <span className={`menu-icon ${open ? 'open' : ''}`}>
               { open? <IoClose /> : <IoIosMenu/>}
             </span>
         </button>
        </div>
         <div id="main-menu" className={`nav-menu ${open ? 'open' : ''}`}>
           <Navbar />
         </div>
    </header>
  )
}

export default Header