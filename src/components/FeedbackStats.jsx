import React from 'react'
import PropTypes from 'prop-types'

const FeedbackStats = ({ feedback }) => {

    let sumOfRatings = 0;
    for (let i = 0; i < feedback.length; i++) {
        sumOfRatings += feedback[i].rating;
    }

    const averageRatings = (sumOfRatings / feedback.length).toFixed(1).replace(/[.,]0$/,'');

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(averageRatings)? 0 : averageRatings}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats