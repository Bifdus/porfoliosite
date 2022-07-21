const Skill = (props) => {
  return (
    <div className='z-50 shadow-md shadow-[#0b0b0b] hover:scale-110 duration-500'>
      <img
        className='w-20 mx-auto'
        src={props.image}
        alt='Web Development Skills icon'
      />
      <p className='my-4'>{props.text}</p>
    </div>
  );
};

export default Skill;
