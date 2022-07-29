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
            I'm a Computer Science Student
          </h2>
          <p className='text-[#fafafa] py-4 max-w-[700px]'>
            I'm a soon to be computer science graduate at Murdoch University
            seeking full time or part-time employment as a front-end or full
            stack developer. Throughout my life I have always had a passion for
            cutting edge technology, which I am excited to build on throughout
            my career as a developer.
          </p>
          <div>
            <Link to='projects' smooth={true} duration={500}>
              <button className='text-white border-2 px-6 py-3 flex items-center hover:bg-cyan-600 hover:border-cyan-700'>
                <p>View Work</p>

                <span>
                  <MdNavigateNext className='ml-2' />
                </span>
              </button>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
};

export default Hero;
