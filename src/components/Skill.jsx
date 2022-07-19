import React, { useState } from 'react';

const Skill = ({ id, image, text }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className='shadow-md shadow-[#0b0b0b] hover:scale-110 duration-500'>
      <img
        className='w-20 mx-auto'
        src={image}
        alt='Web Development Skills icon'
      />
      <p className='my-4'>{text}</p>
    </div>

    // <article className='single-tour'>
    //   <img src={image} alt={name} />
    //   <footer>
    //     <div className='tour-info'>
    //       <h4>{name}</h4>
    //       <h4 className='tour-price'>${price}</h4>
    //     </div>
    //     <p>
    //       {readMore ? info : `${info.substring(0, 200)}...`}
    //       <button onClick={() => setReadMore(!readMore)}>
    //         {readMore ? 'Show less' : 'Read More'}
    //       </button>
    //     </p>
    //     <button className='delete-btn' onClick={() => removeTour(id)}>
    //       not interested
    //     </button>
    //   </footer>
    // </article>
  );
};

export default Tour;
