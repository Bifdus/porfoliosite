import React from 'react';
import ProjectImage from '../assets/workImg.jpeg';

const Projects = () => {
  return (
    <section
      name='projects'
      className='w-full md:h-screen text-neutral-50 bg-[#1a1a1a]'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 text-neutral-50 border-red-400'>
            Projects
          </h2>
          <p className='py-6'>Please take a look at some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ProjectImage})` }}
            className='shadow-lg shadow-[#0b0b0b] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
