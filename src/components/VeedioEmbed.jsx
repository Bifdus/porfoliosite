import React from 'react';
import PropTypes from 'prop-types';

const VeedioEmbed = (props) => (
  <iframe
    className='container content-div hover:scale-110 duration-500'
    src={`https://www.veed.io/embed/${props.embedId}`}
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowFullScreen
    title='Embedded youtube'
  />
);

VeedioEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default VeedioEmbed;
