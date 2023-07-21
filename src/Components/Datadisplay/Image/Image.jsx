import React from 'react';
import PropTypes from 'prop-types';
import { Img } from './Image.styles';
//import { Test } from './Image.styles';

const Image = (props) => (
  <Img
    src={props.src}
    alt={props.alt}
    $borderWidth={props.borderWidth}
    $height={props.height}
    $radius={props.radius}
  />
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  borderWidth: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number,
};

export default Image;
