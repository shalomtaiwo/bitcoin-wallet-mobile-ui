import React from 'react';
import PropTypes from 'prop-types';
import { FlexDiv } from './Flex.styles';

const Flex = (props) => (
  <FlexDiv
    $justify={props.justify}
    $align={props.align}
    $direction={props.direction}
    $radius={props.radius}
    $padding={props.padding}
    $mt={props.mt}
    $mb={props.mb}
    $mr={props.mr}
    $ml={props.ml}
    $background={props.background}
  >
    {props.children}
  </FlexDiv>
);

Flex.propTypes = {
  children: PropTypes.any,
  align: PropTypes.oneOf(['normal','stretch', 'center','flex-start', 'flex-end', 'start', 'end', 'baseline', 'initial', 'inherit']),
  justify: PropTypes.oneOf(['center','flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'initial', 'inherit']),
  mt: PropTypes.number,
  mb: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
  direction: PropTypes.oneOf(['row', 'row-reverse','column', 'column-reverse', 'initial', 'inherit']), 
  radius: PropTypes.number,
  padding: PropTypes.number || PropTypes.string,
  background: PropTypes.string
};

export default Flex;
