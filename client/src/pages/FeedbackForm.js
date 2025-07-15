import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Feedback.css';

const FeedbackForm = ({ onClose }) => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!feedback || rating === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete',
        text: 'Please provide both feedback and a rating.',
      });
      return;
    }

    try {
      const response = await axios.post('/api/feedback', { feedback, rating });

      Swal.fire({
        icon: 'success',
        title: 'Thank you!',
        text: response.data.message || 'Feedback submitted successfully!',
      });

      setFeedback('');
      setRating(0);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Error submitting feedback. Please try again.',
      });
    }
  };

  return (
    <div className="feedback-dialog">
      <div className="feedback-dialog-header">
        <span>Submit Your Feedback</span>
        <button onClick={onClose} title="Close">❌</button>
      </div>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <textarea
          className="feedback-textarea"
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Enter your feedback here..."
          required
        />
        <div className="rating-container">
          <label className="rating-label">Rating: </label>
          <select
            className="rating-select"
            value={rating}
            onChange={handleRatingChange}
          >
            <option value={0} className='co'>Select a rating</option>
            <option value={1} className='co'>1</option>
            <option value={2} className='co'>2</option>
            <option value={3} className='co'>3</option>
            <option value={4} className='co'>4</option>
            <option value={5} className='co'>5</option>
          </select>
        </div>
        <button className="submit-button" type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
