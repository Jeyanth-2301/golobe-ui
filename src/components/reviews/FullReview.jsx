import { useState } from 'react';
import {Container, Typography, Box} from '@mui/material';
import Reviews from './Reviews';
import reviewsData from './reviewsData';


function FullReview() {
  const [reviews, setReviews] = useState(reviewsData);

  // Calculate the average guestRating from the reviews data
  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + parseFloat(review.guestRating), 0);
    return (totalRating / reviews.length).toFixed(1);
  };

  const averageRating = calculateAverageRating();

  // Function to get the rating message based on averageRating
  const getRatingMessage = (rating) => {
    if (rating >= 1 && rating < 2) return 'Very Bad';
    if (rating >= 2 && rating < 3) return 'Bad';
    if (rating >= 3 && rating < 4) return 'Satisfactory';
    if (rating >= 4 && rating < 5) return 'Very Good';
    if (rating === 5) return 'Amazing';
    return 'N/A';
  };

  const ratingMessage = getRatingMessage(averageRating);

  return (
    <>
    
          <Container variant="outlined" style={{ maxWidth: 1232, maxHeight: 800, border:"1px solid black", marginLeft:2, marginRight:2}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant='review5' gutterBottom>
                Reviews
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center'}}>
                {/* Display the dynamic averageRating and corresponding rating message */}
                <Typography variant='review3' component='span' style={{ fontWeight: 'bold' }}>
                  {averageRating}
                </Typography>
                <Typography variant='review4' component='span' style={{  fontWeight: 'bold' }}>
                  {ratingMessage}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                <Typography variant='review1' component='span'>{reviews.length} verified reviews</Typography>
              </Box>
            </Box>
            {/* Create the styled rectangle */}
            <Box
              component="div"
              sx={{
                width: '100%',
                height: '0.5px',
                backgroundColor: '#112211',
                opacity: 0.25,
                my: '8px',
              }}
            />
            <Reviews reviews={reviews} setReviews={setReviews} averageRating={averageRating} />
          </Container>
    </>
  );
}

export default FullReview;
