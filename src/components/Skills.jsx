import React from 'react';
import Skill from './Skills';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactLogo from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-[#1a1a1a] text-neutral-50'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-red-400 '>
            Experience
          </p>
          <p className='py-6'>Technologies i've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#0b0b0b] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#0b0b0b] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-4' src={CSS} alt='HTML icon' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#0b0b0b] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt='HTML icon' />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#0b0b0b] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactLogo} alt='HTML icon' />
            <p className='my-4'>React JS</p>
          </div>
          <div className='shadow-md shadow-[#0b0b0b] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt='HTML icon' />
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#0b0b0b] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='HTML icon' />
            <p className='my-4'>Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
