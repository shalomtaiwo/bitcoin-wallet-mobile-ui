import React from 'react';
import PropTypes from 'prop-types';
import { CardContent, CardFooter, CardHeader, CardMain } from './Card.styles';
//import { Test } from './Card.styles';

const Card = (props) => (
  <CardMain
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
    {props.header && <CardHeader>{props.header}</CardHeader>}
    <CardContent>{props.content}</CardContent>
    {props.footer && <CardFooter>{props.footer}</CardFooter>}
  </CardMain>
);

Card.propTypes = {
  header: PropTypes.any,
  content: PropTypes.any,
  footer: PropTypes.any,
  height: PropTypes.number,
  width: PropTypes.number,
  pb: PropTypes.number,
  pt: PropTypes.number,
  pr: PropTypes.number,
  pl: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
};

export default Card;
