import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import dotGreen from '../../../Assets/dotGreen.png'
import dotPink from '../../../Assets/dotPink.png'
import dotWarning from '../../../Assets/dotWarning.png'
import Flex from '../../Typography/Flex/Flex';

const Status = (props) => {
  if (props.variant === "active") {
    return (
      <>
        {props.text ? <>
          <Flex align={'center'}>
            <Image src={dotGreen} alt={'active'} height={30} />
            {props.text}
          </Flex>
        </> : <Image src={dotGreen} alt={'active'} height={30} />}
      </>
    )
  }
  if (props.variant === "warning") {
    return (
      <>
        {props.text ? <>
          <Flex align={'center'}>
            <Image src={dotWarning} alt={'warning'} height={30} />
            {props.text}
          </Flex>
        </> : <Image src={dotWarning} alt={'warning'} height={30} />}
      </>
    )
  }
  if (props.variant === "error") {
    return (
      <>
        {props.text ? <>
          <Flex align={'center'}>
            <Image src={dotPink} alt={'error'} height={30} />
            {props.text}
          </Flex>
        </> : <Image src={dotPink} alt={'error'} height={30} />}
      </>
    )
  }

}

Status.propTypes = {
  variant: PropTypes.oneOf(['active', 'warning', 'error']),
  text: PropTypes.any,
};

Status.defaultProps = {
  variant: 'active'
};

export default Status;
