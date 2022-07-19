import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Denim Hodgson.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[3rem] flex justify-between items-center px-4 bg-[#272727] text-[#fafafa]'>
      <div>
        <img src={Logo} alt='Denim Logo' style={{ width: '50px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile-menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#272727] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Projects</li>
        <li className='py-6 text-4xl'>Home</li>
      </ul>
    </div>
  );
};

export default Navbar;
