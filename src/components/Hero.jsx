import React from 'react';
import { MdNavigateNext } from 'react-icons/md';

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-[#1a1a1a]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify justify-center h-full'>
        <p className='text-[#fafafa] text-xl'>Hello, my name is</p>
        <h1 className='text-[#ff4d5a] font-bold text-4xl sm:text-7xl'>Denim</h1>
        <h2 className='text-4xl sm:text-4xl text-[#fafafa]'>
          I'm a Graduate Computer Science Student
        </h2>
        <p className='text-[#fafafa] py-4 max-w-[700px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          dolorum nostrum, id molestias maxime placeat culpa odit aliquam ex
          eveniet numquam molestiae facilis voluptate rerum consequuntur
          reiciendis distinctio illo impedit.
        </p>
        <div>
          <button className='text-white border-2 px-6 py-3 flex items-center hover:bg-red-400 hover:border-red-400'>
            View Work
            <span className='hover:rotate-90 duration-300'>
              <MdNavigateNext className='ml-2' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
