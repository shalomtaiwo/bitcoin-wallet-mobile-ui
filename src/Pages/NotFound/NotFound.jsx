import React from 'react';
import Image from '../../Components/Datadisplay/Image/Image';
import notfound from '../../Assets/404.png'
import Flex from '../../Components/Typography/Flex/Flex';
import Button from '../../Components/Button/TextButton';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const navigate = useNavigate()

  const goTo = () => {
    navigate("/")
  }

  return (
    <Flex align={'center'} justify={'center'} direction={'column'}>
      <Image src={notfound} height={200} />
      <Button bgColor={'#838383'} onClick={goTo}>Go to Home</Button>
    </Flex>
  );
}


export default NotFound;
