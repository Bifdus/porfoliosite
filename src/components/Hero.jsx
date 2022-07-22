import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import Particle from './Particle';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <>
      <Particle />
      <section name='hero' className='w-full h-screen bg-[#1a1a1a]'>
        {/* container */}
        <article className='max-w-[1000px] mx-auto px-8 flex flex-col justify justify-center h-full'>
          <p className='my-2 text-[#fafafa] text-xl'>Hello, my name is</p>
          <h1 className='text-cyan-600 font-bold text-4xl sm:text-7xl mb-2'>
            Denim
          </h1>
          <h2 className='text-4xl sm:text-4xl text-slate-200'>
            I'm a Graduate Computer Science Student
          </h2>
          <p className='text-[#fafafa] py-4 max-w-[700px]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias in
            libero repellat eligendi minus ducimus laborum ratione dolorem magni
            ipsa.
          </p>
          <div>
            <button className='text-white border-2 px-6 py-3 flex items-center hover:bg-cyan-600 hover:border-cyan-700'>
              <Link to='projects' smooth={true} duration={500}>
                View Work
              </Link>

              <span>
                <MdNavigateNext className='ml-2' />
              </span>
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default Hero;
