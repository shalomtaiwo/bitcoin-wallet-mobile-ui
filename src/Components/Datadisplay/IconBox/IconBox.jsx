import React from 'react';
import PropTypes from 'prop-types';
import { IconBoxCard } from './IconBox.styles';
//import { Test } from './IconBox.styles';

const IconBox = (props) => (
  <IconBoxCard
    $height={props.height}
    $width={props.width}
    $pb={props.pb}
    $pt={props.pt}
    $pr={props.pr}
    $pl={props.pl}
    $mt={props.mt}
    $mb={props.mb}
    $mr={props.mr}
    $ml={props.ml}
  >
    {props.children}
  </IconBoxCard>
);

IconBox.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  $pb: PropTypes.number,
  $pt: PropTypes.number,
  $pr: PropTypes.number,
  $pl: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
};


export default IconBox;
