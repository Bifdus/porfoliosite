import React from 'react';
import PropTypes from 'prop-types';

const VeedioEmbed = ({ embedId }) => (
  <div className='video-responsive'>
    <iframe
      width='853'
      height='480'
      src={`https://www.veed.io/embed/${embedId}`}
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
