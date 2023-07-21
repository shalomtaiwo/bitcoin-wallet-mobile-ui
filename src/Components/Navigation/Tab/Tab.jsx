import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { MainTab, TabHeader, TabItem } from './Tab.styles';
import Text from '../../Typography/Text/Text';

export const TabContext = createContext();

const Tab = (props) => {

  const handleTabClick = (index) => {
    props.setActiveTab(index);
  };

  return (
    <MainTab>
      <TabHeader>
        {props.tabs.map((tab, index) => (
          <TabItem
            key={index}
            style={{
              backgroundColor: index === props.activeTab ? "#aeb8c4" : '',
            }}
            onClick={() => handleTabClick(index)}>
            <Text
              mt={1}
              mb={1}
              color={index === props.activeTab ? "#fff" : '#aeb8c4'}>
              {tab.label}
            </Text>
          </TabItem>
        ))}
      </TabHeader>
    </MainTab >
  )
}

Tab.propTypes = {
  tabs: PropTypes.array,
  activeTab: PropTypes.number,
  setActiveTab: PropTypes.any
};

Tab.defaultProps = {
  // bla: 'test',
};

export default Tab;
