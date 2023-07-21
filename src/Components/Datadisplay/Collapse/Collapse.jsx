import React from 'react';
import PropTypes from 'prop-types';
import { CollapseContent, CollapseHeader, MainCollapse } from './Collapse.styles';

const Collapse = (props) => {

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleCollapse = () => {
    props.setIsOpen(!props.isOpen);
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, 300);
  };

  const getContent = (content) => {
    return <>{isVisible && <CollapseContent>{content}</CollapseContent>}</>
  }

  return (
    <MainCollapse>
      <CollapseHeader onClick={toggleCollapse}>
        {props.title}{props.isOpen ? props.openIcon : props.closeIcon}
      </CollapseHeader>
      {props.isOpen && getContent(props.content)}
    </MainCollapse>
  )
}

Collapse.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.any,
  content: PropTypes.any,
  title: PropTypes.string,
  openIcon: PropTypes.any,
  closeIcon: PropTypes.any,
};

export default Collapse;
