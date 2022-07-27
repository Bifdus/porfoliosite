import React from 'react';
import VeedioEmbed from './VeedioEmbed';

const Project = (props) => {
  return (
    <>
      <div className='bg-[rgba(50,22,187,0.60)] video-responsive'>
        <div className='flex'>
          <VeedioEmbed embedId={props.embedId} />
          {/* <div
            style={{ backgroundImage: `url(${props.image})` }}
            className='container content-div hover:scale-110 duration-500'
          ></div> */}
        </div>
      </div>

      <div className='bg-[#1a1a1a)'>
        <h2 className='my-4 mx-4 font-bold text-2xl'>{props.title}</h2>
        <p className='mx-4'>{props.text}</p>
        <div className='flex justify-center my-8'>
          <a href={props.link}>
            <div className='text-center rounded-lg px-8 py-3 mx-2 bg-slate-800 text-neutral-50 font-bold text-lg'>
              <h1>{props.buttontext}</h1>
            </div>
          </a>
          {/* <a href='/'>
            <div className='text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-800 font-bold text-lg'>
              <h1>Demo</h1>
            </div>
          </a> */}
        </div>
      </div>
    </>
  );
};

export default Project;
