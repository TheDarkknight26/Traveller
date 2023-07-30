import express from 'express';
import mongoose from 'mongoose';
import UserReview from '../UserModels/User.js'

const router = express.Router();

router.post('/reviews', async (req, res) => {
    try {
      const { name, comment } = req.body;
  
      // Create a new user review instance
      const newReview = new UserReview({
        name,
        comment,
      });
  
      // Save the review to the database
      await newReview.save();
  
      res.status(201).json({ message: 'Review submitted successfully!', review: newReview });
    } catch (error) {
      console.error('Error submitting review:', error);
      res.status(500).json({ message: 'Error submitting review' });
    }
  });

  export default router;
  