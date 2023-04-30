import React from 'react'
import PropTypes from 'prop-types'

const Card = ({children, dark}) => {
  return (
    <div className={
        `card ${dark && `reverse`}`
    }>
        {children}
    </div>
    
  )
}

Card.defaultProps = {
    dark: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    dark: PropTypes.bool
}

export default Card