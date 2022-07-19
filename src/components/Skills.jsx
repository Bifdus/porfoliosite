import React from 'react';

import HTML from '../assets/html.6aa56206be02cf6404844871df1d2da6.png';
import CSS from '../assets/css.0ce0f0a2b4c4aa34b64c40e5278af3d1.png';
import JavaScript from '../assets/js.f8a28e905c78dadb79434b7ceebd52a0.png';
import ReactLogo from '../assets/react.cb15bfce2a9004ce61c5f79f805b067b.png';
import GitHub from '../assets/github-logo.d03ce87cf6b5a432c44f847eefec1204.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-[#1a1a1a] text-neutral-50'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-red-400 '>
            Experience
          </p>
          <p className='py-4'>// These are the technologies i've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#0b0b0b] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-4' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
