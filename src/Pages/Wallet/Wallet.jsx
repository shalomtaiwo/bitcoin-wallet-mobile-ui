import React from 'react'
import TopBar from '../../Components/Navigation/TopBar/TopBar'
import { Main } from './Wallet.styles';
import BitcoinCard from './BitcoinCard';
import Flex from '../../Components/Typography/Flex/Flex';
import Image from '../../Components/Datadisplay/Image/Image';
import dollarOne from '../../Assets/dollar.png'
import dollarTwo from '../../Assets/dollarTwo.png'
import IconBox from '../../Components/Datadisplay/IconBox/IconBox';
import Text from '../../Components/Typography/Text/Text';
import ChartSection from '../ChartSection/ChartSection';


const Wallet = () => {
  return (
    <>
      {/* TobBar */}
      <TopBar />

      {/* Main Content*/}
      <Main>

        {/* Bitcoin Card */}
        <BitcoinCard />

        {/* Chart Card */}
        <ChartSection />

        {/* Icon Box */}
        <Flex justify={'space-between'} align={'center'}>
          <IconBox width={36} height={105} >
            <Image src={dollarOne} alt={'Dollar logo'} height={42} />
            <Text size={12.84}>Buy BTC</Text>
          </IconBox>
          <IconBox width={36} height={105} >
            <Image src={dollarTwo} alt={'Bitcoin logo'} height={42} />
            <Text size={12.84}>Sell BTC</Text>
          </IconBox>
        </Flex>
      </Main>
    </>
  )
}

export default Wallet