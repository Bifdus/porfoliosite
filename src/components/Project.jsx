import React from 'react';

const Project = (props) => {
  return (
    <>
      <div className='bg-[rgba(50,22,187,0.60)]'>
        <div className='flex mb-8'>
          <div
            style={{ backgroundImage: `url(${props.image})` }}
            className='mt-8 mr-16 group container  justify-center items-center mx-auto relative z-0 content-div'
          ></div>
        </div>
      </div>

      <div className='bg-[#1a1a1a)'>
        <h2 className='my-4 mx-4 font-bold text-2xl'>
          Multiplayer Boxing Game Project
        </h2>
        <p className='mx-4'>
          Professional practice project unit at university. We were tasked to
          create a multiplayer boxing game for the oculus quest 2 intended to be
          used for parkinsons rehabilitation patients.
        </p>
        <a href='https://www.veed.io/view/4b6f9255-544d-45e7-9dc7-fcad99a63b53'>
          <div className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
            <h1>Demo Video</h1>
          </div>
        </a>
      </div>
    </>
  );
};

export default Project;
