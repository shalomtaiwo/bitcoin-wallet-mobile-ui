import React from 'react';
import { Div } from './TopBar.styles';
import ActionIcon from '../../Button/ActionIcon';
import { IconChevronLeft, IconDotsVertical, IconEdit, IconInfoSquare, IconRowRemove, IconShare } from '@tabler/icons-react';
import Text from '../../Typography/Text/Text';
import Dropdown from '../Dropdown/Dropdown';

const optionsData = [
  { label: 'Edit', icon: <IconEdit size={18} color='#596573' /> },
  { label: 'BTC info', icon: <IconInfoSquare size={18} color='#596573' /> },
  { label: 'Share', icon: <IconShare size={18} color='#596573' /> },
  { label: 'Remove', icon: <IconRowRemove color='red' size={18} /> },
];

const TopBar = () => (
  <Div>
    <ActionIcon>
      <IconChevronLeft size={28} />
    </ActionIcon>

    <Text color="#4c5968" size={26} space={-1}>
      Bitcoin Wallet
    </Text>

    <Dropdown options={optionsData} icon={<IconDotsVertical size={28} />} />
  </Div>
);


export default TopBar;
