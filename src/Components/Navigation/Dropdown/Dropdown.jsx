import React from 'react';
import PropTypes from 'prop-types';
import ActionIcon from '../../Button/ActionIcon';
import { DropDn, DropDnLi, DropDnOptions } from './Dropdown.styles';
import Text from '../../Typography/Text/Text';
import Flex from '../../Typography/Flex/Flex';
//import { Test } from './Dropdown.styles';

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(props.options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log(selectedOption)
  };

  return (
    <DropDn>
      <ActionIcon onClick={toggleDropdown}>
        {props.icon}
      </ActionIcon>
      {isOpen && (
        <DropDnOptions>
          {props.options.map((option, index) => (
            <DropDnLi key={index} onClick={() => handleOptionClick(option)}>
              <Flex justify={'space-between'}>
                <Text color={'inherit'} size={14}>{option.label}</Text>
                <ActionIcon>
                  {option.icon}
                </ActionIcon>
              </Flex>
            </DropDnLi>
          ))}
        </DropDnOptions>
      )}
    </DropDn>
  )
}

Dropdown.propTypes = {
  options: PropTypes.array,
  icon: PropTypes.any
};

Dropdown.defaultProps = {
  // bla: 'test',
};

export default Dropdown;
