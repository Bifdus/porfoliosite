import React from 'react';
// import { IoPersonOutline } from 'react-icons/io5';
import ProfileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section
      name='about'
      className='w-full h-screen bg-[#1a1a1a] text-neutral-50'
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <img id='profile' src={ProfileImg} alt='Denim Hodgson Profile' />
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-fuchsia-800'>
              About
            </p>
            <h2 className='text-2xl sm:text-1xl pt-6'>
              Hi, Please take a look around
            </h2>
          </div>
          <div>
            <p>
              I have gained a strong passion for web development and
              specifically new frameworks for creating clean and functional apps
              that are deployed to cloud services. I am constantly seeking to
              improve my skills in front and back end web development and would
              take any opportunity to further that goal. Outside of work I enjoy
              boxing to keep fit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
