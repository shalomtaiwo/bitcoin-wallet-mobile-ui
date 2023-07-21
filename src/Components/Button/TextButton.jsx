import React from 'react';
import PropTypes from 'prop-types';
import { TextButton } from './Button.styles';

const Button = (props) => (
  <TextButton
    $bgColor={props.bgColor}
    $color={props.color}
    $size={props.size}
    $mt={props.mt}
    $mb={props.mb}
    $mr={props.mr}
    $ml={props.ml}
    onClick={props.onClick}
  >
    {props.children}
  </TextButton>
);

Button.propTypes = {
  children: PropTypes.any,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
  onClick: PropTypes.any
};



export default Button;
