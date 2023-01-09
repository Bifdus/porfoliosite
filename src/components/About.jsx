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
              I have always had a fascination with technology and development,
              and when I began working on computer science projects I discovered
              my passion for web development. This inspired me to pursue a
              career in the field and hone my skills using industry standard
              frameworks including ReactJS and Typescript to create functional
              and user-friendly applications. I am constantly seeking
              opportunities to improve my skills in both front and back end
              development, as well as explore new and emerging techniques and
              technologies. In addition to my technical expertise, I place a
              strong emphasis on customer experience and am committed to
              building positive relationships. Outside of work, I enjoy staying
              active through boxing and other fitness activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
