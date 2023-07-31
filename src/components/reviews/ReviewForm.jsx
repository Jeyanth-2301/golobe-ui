// components/ReviewForm.js
import React, { useState } from 'react';
import { TextField, Typography, Button, Box, Grid } from '@mui/material';

const ReviewForm = ({ onReviewSubmit }) => {
  const [user, setUser] = useState('');
  const [guestRating, setGuestRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      user,
      guestRating,
      comment,
    };
    onReviewSubmit(newReview);
    setUser('');
    setGuestRating
(0);
    setComment('');
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Write a Review
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          fullWidth
          required
        /><br/><br/>
        <TextField
          type="number"
          label="guestRating"
          value={guestRating}
          onChange={(e) => {
            // Limit the guestRating to be between 1 and 5
            let value = e.target.value;
            if (value < 1) {
              value = 1;
            } else if (value > 5) {
              value = 5;
            }
            setGuestRating
        (value);
          }}
          fullWidth
          required
          inputProps={{
            min: 1, // Minimum value
            max: 5, // Maximum value
            step: 0.1, // Decimal step value
          }}
        /><br/><br/>
        <TextField
          label="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          fullWidth
          multiline
          required
        />
        <Grid container justifyContent='center'>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, background:'#8DD3BB' }}>
          Submit Review
        </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default ReviewForm;
