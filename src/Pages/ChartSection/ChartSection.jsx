import React from 'react';
import Card from '../../Components/Datadisplay/Card/Card';
import Flex from '../../Components/Typography/Flex/Flex';
import Status from '../../Components/Datadisplay/Status/Status';
import Text from '../../Components/Typography/Text/Text';
import Chart from '../../Components/Datadisplay/Chart/Chart';
//import { Test } from './ChartSection.styles';
const data = [
  {
    name: '',
    btc: 1500,
    amt: 1400,
  },
  {
    name: '',
    btc: 2000,
    amt: 3400,
  },
  {
    name: '',
    btc: 2050,
    pv: 3400,
    amt: 3400,
  },
  {
    name: '',
    btc: 1900,
    amt: 3400,
  },
  {
    name: '',
    btc: 1900,
    amt: 3400,
  },
  {
    name: '',
    btc: 2300,
    amt: 3400,
  },
  {
    name: '',
    btc: 2400,
    amt: 3400,
  },
  {
    name: '',
    btc: 2300,
    amt: 3400,
  },
  {
    name: '',
    btc: 2350,
    amt: 3500,
  }
];

const ChartSection = () => (
  <Card
    pr={-1}
    pl={-1}
    pb={-1}
    height={170}
    header={
      <Flex justify={'space-between'} ml={-10} padding={"10px 18px 0 18"}>
        <Status variant={'error'} text={<Text color={'#9a9bb0'}>Lower: $4.895</Text>} />
        <Status text={<Text color={'#9a9bb0'}>Higher: $6.857</Text>} />
      </Flex>
    }
    content={
      <>
        <Chart data={data} />
      </>
    }
  />
);

export default ChartSection;
