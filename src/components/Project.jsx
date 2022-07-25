import React from 'react';

const Project = (props) => {
  return (
    <>
      <div key={props.id} className='bg-[rgba(50,22,187,0.60)]'>
        <div className='flex mb-8'>
          <div
            style={{ backgroundImage: `url(${props.image})` }}
            className='container content-div-left'
          ></div>
        </div>
      </div>

      <div className='bg-[#1a1a1a)'>
        <h2 className='my-4 mx-4 font-bold text-2xl'>{props.title}</h2>
        <p className='mx-4'>
          The multiplayer component of the game was set up using Photon and
          Photon Voice. The game mode allows players to join lobbies and
          interact with each other. Includes RPC's for collision detection.
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
