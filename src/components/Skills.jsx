import React from 'react';
import Skill from './Skill';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactLogo from '../assets/react.png';
import GitHub from '../assets/github.png';
import Java from '../assets/java.png';

const Skills = () => {
  return (
    <section
      name='skills'
      className='w-full h-screen bg-[#1a1a1a] text-neutral-50'
    >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <h2 className='text-4xl font-bold inline border-b-4 border-rose-800 '>
            Skills
          </h2>
          <p className='py-6'>Technologies i'm comfortable with</p>
        </div>

        {/* Skills Grid*/}
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <Skill image={HTML} text='HTML' />
          <Skill image={CSS} text='CSS' />
          <Skill image={JavaScript} text='JavaScript' />
          <Skill image={ReactLogo} text='React JS' />
          <Skill image={GitHub} text='GitHub' />
          <Skill image={Java} text='Java' />
        </div>
      </div>
    </section>
  );
};

export default Skills;
