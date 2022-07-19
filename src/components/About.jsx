import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';

const About = () => {
  return (
    <section
      name='about'
      className='w-full h-screen bg-[#1a1a1a] text-neutral-50'
    >
      <h2 className='py-[100px] text-6xl flex flex-col items-center'>About</h2>
      <div>
        <IoPersonOutline className='w-[35%] h-[35%] flex flex-col items-center' />
        <div>
          <div></div>
        </div>
      </div>
      {/* <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-400'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div>
            <p>Hi, Please take a look at the things I have been working on</p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default About;
