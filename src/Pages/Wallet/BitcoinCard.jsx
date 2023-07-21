import React from 'react'
import bitcoin from '../../Assets/bitcoin.png'
import Image from '../../Components/Datadisplay/Image/Image';
import Card from '../../Components/Datadisplay/Card/Card';
import Tab from '../../Components/Navigation/Tab/Tab';
import Text from '../../Components/Typography/Text/Text';
import Flex from '../../Components/Typography/Flex/Flex';
import Collapse from '../../Components/Datadisplay/Collapse/Collapse';
import { IconChevronCompactDown, IconChevronCompactUp } from '@tabler/icons-react';
import Button from '../../Components/Button/TextButton';

const tabsData = [
    {
        label: 'Day',
    },
    {
        label: 'Week',
    },
    {
        label: 'Month',
    },
    {
        label: 'Year',
    },
];


const BitcoinCard = () => {
    const [activeTab, setActiveTab] = React.useState(1);
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <Card
                height={isOpen ? 230 : 180}
                header={
                    <Flex align={'center'} justify={'space-between'}>
                        <Flex align={'center'}>
                            <Image src={bitcoin} alt={'Bitcoin logo'} height={35} />
                            <Text size={12.84} ml={8} pb={8} pl={8} pt={8} pr={8} color={"#4c5968"}>Bitcoin</Text>
                        </Flex>
                        <Text color="#aeb8c4" size={12.84}>BTC</Text>
                    </Flex>
                }
                content={
                    <>
                        <Text size={30} color={"#4c5968"} mb={-5} mt={16}>{Number(((activeTab + 0.1) * 3.529020).toFixed(6))} BTC</Text>
                        <Flex align={'center'} justify={'space-between'}>
                            <Text size={18} color={"#aeb8c4"}>${Number(((activeTab + 1) * 19.153).toFixed(3))} USD</Text>
                            <Text
                                mt={-1} mb={-1} pb={4} pl={12} pt={4}
                                pr={12} radius={18} size={12.84} color={"#fff"}
                                background={"#ee225d"} family={'Bold'}>
                                - {Number(((activeTab + 1) * 2.32).toFixed(2))}%
                            </Text>
                        </Flex>
                    </>
                }
                footer={
                    <>
                        <Collapse
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            openIcon={<IconChevronCompactUp color='#aeb8c4' size={32} />}
                            closeIcon={<IconChevronCompactDown color='#aeb8c4' size={32} />}
                            content={<>
                                <Flex justify={"flex-start"}>
                                    <Button>Buy</Button>
                                    <Button bgColor={"#ee225d"} ml={8}>Sell</Button>
                                </Flex>
                            </>}
                        />
                    </>
                }
            />
            {/* Tab Section */}

            <Tab tabs={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />
        </>
    )
}

export default BitcoinCard