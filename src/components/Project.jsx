import React from 'react';

const Project = (props) => {
  return (
    <>
      <div key={props.id} className='bg-[rgba(50,22,187,0.60)]'>
        <div className='flex'>
          <div
            style={{ backgroundImage: `url(${props.image})` }}
            className='container content-div hover:scale-110 duration-500'
          ></div>
        </div>
      </div>

      <div className='bg-[#1a1a1a)'>
        <h2 className='my-4 mx-4 font-bold text-2xl'>{props.title}</h2>
        <p className='mx-4'>{props.text}</p>
        <a href={props.link}>
          <div className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
            <h1>Demo Video</h1>
          </div>
        </a>
      </div>
    </>
  );
};

export default Project;
