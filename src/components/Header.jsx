import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ heading, bgColor, textColor }) => {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>
                    {heading}
                </h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    heading: 'Feedback',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.propTypes = {
    heading: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header