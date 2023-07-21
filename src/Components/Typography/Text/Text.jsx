import React from 'react';
import PropTypes from 'prop-types';
import { P } from './Text.styles';

const Text = (props) => (
  <P
    $size={props.size}
    $color={props.color}
    $family={props.family}
    $radius={props.radius}
    $mt={props.mt}
    $mb={props.mb}
    $mr={props.mr}
    $ml={props.ml}
    $pt={props.pt}
    $pb={props.pb}
    $pr={props.pr}
    $pl={props.pl}
    $space={props.space}
    $background={props.background}
  >
    {props.children}
  </P>
);

Text.propTypes = {
  children: PropTypes.any,
  size: PropTypes.number,
  space: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  pr: PropTypes.number,
  pl: PropTypes.number,
  color: PropTypes.string,
  family: PropTypes.oneOf(['Bold', 'Semibold','Normal', 'Lighter']), // normal is the same
  radius: PropTypes.number,
  background: PropTypes.string
};

Text.defaultProps = {
  children: "Title",
};

export default Text;
