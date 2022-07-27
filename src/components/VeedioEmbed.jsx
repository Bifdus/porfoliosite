import React from 'react';
import PropTypes from 'prop-types';

const VeedioEmbed = (props) => (
  <div className='container content-div hover:scale-110 duration-500'>
    <iframe
      width='853'
      height='480'
      src={`https://www.veed.io/embed/${props.embedId}`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded youtube'
    />
  </div>
);

VeedioEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default VeedioEmbed;
