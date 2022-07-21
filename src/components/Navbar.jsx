import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Denim Hodgson.png';
import NavItem from './NavItem';

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
          <NavItem name='hero' text='Home' isStyle={false} />
          <NavItem name='about' text='About' isStyle={false} />
          <NavItem name='skills' text='Skills' isStyle={false} />
          <NavItem name='projects' text='Skills' isStyle={false} />
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
          <NavItem
            name='hero'
            text='Home'
            isStyle={true}
            handleClick={handleClick}
          />
          <NavItem
            name='about'
            text='About'
            isStyle={true}
            handleClick={handleClick}
          />
          <NavItem
            name='skills'
            text='Skills'
            isStyle={true}
            handleClick={handleClick}
          />

          <NavItem
            name='projects'
            text='Projects'
            isStyle={true}
            handleClick={handleClick}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
