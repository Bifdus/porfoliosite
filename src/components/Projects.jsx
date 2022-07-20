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

        <div
          style={{ backgroundImage: `url(${ProjectImage})` }}
          className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'
        >
          <div className='shadow-lg shadow-[#0b0b0b] container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effect */}
            {/* <div className='opacity-0 group-hover:opacity-100'>
              <span></span>
              <div>
                <a href='/'>
                  <button></button>
                </a>
                <a href='/'>
                  <button></button>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
