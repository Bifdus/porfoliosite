import React from 'react';

const Project = (props) => {
  return (
    <div className='flex mb-12'>
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className='shadow-lg shadow-[#0b0b0b] group container rounded-md justify-center items-center mx-auto relative z-0 content-div'
      >
        {/* Hover effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            {props.text}
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
      <div className='bg-[#3a31b4]'>
        <h2 className='font-bold text-2xl'>Multiplayer Boxing Game Project</h2>
        <p>
          Professional practice project unit at university. We were tasked to
          create a multiplayer boxing game for the oculus quest 2 intended to be
          used for parkinsons rehabilitation patients. Axis and rotation data is
          stored in an sql database on a LAMP stack
        </p>
        <a href='/'>
          <div>
            <h1>Demo Video</h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
