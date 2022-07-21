import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Denim Hodgson.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <header>
      <nav className='fixed w-full h-[3rem] flex justify-between items-center px-4 bg-[#272727] text-[#fafafa]'>
        <div>
          <img src={Logo} alt='Denim Logo' style={{ width: '50px' }} />
        </div>

        {/* menu */}
        <ul className='hidden md:flex'>
          <li>
            <Link to='hero' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to='projects' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
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
          <li className='py-6 text-4xl'>
            <li>
              <Link
                onClick={handleClick}
                to='hero'
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link
              onClick={handleClick}
              to='skills'
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link
              onClick={handleClick}
              to='projects'
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
