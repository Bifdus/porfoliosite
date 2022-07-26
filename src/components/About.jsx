import React from 'react';
// import { IoPersonOutline } from 'react-icons/io5';
import ProfileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section
      name='about'
      className='w-full max-h-[1200px] bg-[#1a1a1a] text-neutral-50'
    >
      <div className='flex flex-col justify-center items-center w-full'>
        <img id='profile' src={ProfileImg} alt='Denim Hodgson Profile' />
        <div className='max-w-[1000px] w-full h-full grid grid-cols-2 gap-8 about-section'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-fuchsia-800'>
              About
            </p>
            <h2 className='text-2xl sm:text-1xl pt-6'>
              Hi. Please take a look around
            </h2>
          </div>
          <div>
            <p className='mx-4'>
              During my time working in a different industry manufacturing
              hydraulic hoses, I stumbled upon a strong passion for web
              development. This has driven me to change my career as in
              particular, I enjoy working with industry standard frameworks to
              create clean and functional applications that are deployed to
              cloud services. In pursuing a career as a web developer, I am
              seeking opportunities which will help me to improve my skills in
              front and back end development and enable me to explore new and
              emerging techniques / technologies. In addition to my technical
              capabilities, I prioritise customer experience and am passionate
              about relationship building. Outside of work, I enjoy boxing to
              keep fit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
