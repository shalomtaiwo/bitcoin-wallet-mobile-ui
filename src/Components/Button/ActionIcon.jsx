import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from './Button.styles'

const ActionIcon = props => {
  return (
    <IconButton onClick={props.onClick}>
      {props.children}
    </IconButton>
  )
}

ActionIcon.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func
}

export default ActionIcon