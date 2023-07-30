import React, { useState } from 'react';
import './UserReviewForm.css';
import axios from 'axios';

const UserReviewForm = ({ onReviewSubmit }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name.trim() !== '' && comment.trim() !== '') {
      // Create a new review object
      const newReview = {
        name: name.trim(),
        comment: comment.trim(),
      };

      // Call the onReviewSubmit prop function to store the review
      if (onReviewSubmit) {
        onReviewSubmit(newReview);
      }

      // Clear the form fields
      setName('');
      setComment('');

      try {
        // Send the data to the backend using Axios
        const response = await axios.post('https://localhost:6001/api/reviews', newReview); // Replace '/api/reviews' with the actual endpoint URL of your backend API
  
        // Handle successful response if needed
        console.log('Review submitted successfully!', response.data);
      } catch (error) {
        // Handle errors
        console.error('Error submitting review:', error);
      }
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="comment">Your Review:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default UserReviewForm;
