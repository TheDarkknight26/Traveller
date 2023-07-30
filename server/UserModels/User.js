import mongoose from 'mongoose';

const userReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  
});

// Create the UserReview model using the schema
const UserReview = mongoose.model('UserReview', userReviewSchema);
export default UserReview;
// Export the model
