import React from 'react'
import FeedbackItem from './FeebackItem'
import PropTypes from 'prop-types'

const FeedbackList = ({ feedback, handleDelete }) => {
    if (!feedback || feedback.length === 0) {
        return ('Non feedback Data')
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item)=>(
                <FeedbackItem
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                />
        ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number,
            text: PropTypes.string,
            rating: PropTypes.number
        })
    )
}

export default FeedbackList