// import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
// import FlagIcon from '@material-ui/icons';


const Review = ({ user, image, guestRating, comment }) => {
  // Parse the guestRating into a number (in case it's coming as a string)
  const parsedGuestRating = parseFloat(guestRating);
  // Format the guestRating to one decimal place if it's a single-digit number
  const formattedGuestRating = parsedGuestRating % 1 === 0 ? parsedGuestRating.toFixed(1) : parsedGuestRating;

  // Function to get the message based on the guestRating
  const getRatingMessage = (rating) => {
    if (rating >= 1 && rating < 2) return 'Very Bad';
    if (rating >= 2 && rating < 3) return 'Bad';
    if (rating >= 3 && rating < 4) return 'Satisfactory';
    if (rating >= 4 && rating < 5) return 'Very Good';
    if (rating === 5) return 'Amazing';
  };

  const ratingMessage = getRatingMessage(parsedGuestRating);

  return (
    <>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, maxWidth:1232 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar alt={user} src={image} sx={{ width: 64, height: 64, mr: 2 }} />
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="review2">{user} | </Typography>
            {/* Display the formatted guestRating value */}
            <Typography variant="review1" sx={{ ml: 1, fontWeight: 'bold', color: 'black' }}>
              {formattedGuestRating}
            </Typography>
            {/* Display the rating message */}
            <Typography variant="review1" sx={{ ml: 1, color: 'black', fontWeight: 'bold' }}>
              {ratingMessage}
            </Typography>
          </Box>
          <Typography align="left" variant="review1">
            {comment}
          </Typography>
        </Box>
      </Box>
      <Box>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g opacity="0.75">
    <path d="M3.125 18.75C2.95924 18.75 2.80027 18.6842 2.68306 18.5669C2.56585 18.4497 2.5 18.2908 2.5 18.125V2.66133C2.50004 2.49757 2.54298 2.33668 2.62454 2.19468C2.70609 2.05268 2.82342 1.93451 2.96484 1.85195C3.4375 1.57734 4.38984 1.25 6.25 1.25C7.70352 1.25 9.3293 1.82461 10.7637 2.33125C11.9187 2.73945 13.0098 3.125 13.75 3.125C14.7029 3.12208 15.6457 2.92953 16.5234 2.55859C16.6303 2.51348 16.7467 2.49551 16.8622 2.50629C16.9777 2.51708 17.0888 2.55628 17.1855 2.6204C17.2822 2.68452 17.3615 2.77158 17.4164 2.8738C17.4713 2.97602 17.5 3.09023 17.5 3.20625V11.775C17.4998 11.9269 17.4554 12.0754 17.3722 12.2024C17.2889 12.3295 17.1704 12.4295 17.0312 12.4902C16.691 12.6391 15.4488 13.125 13.75 13.125C12.807 13.125 11.6258 12.8461 10.3754 12.5504C8.96992 12.2184 7.5168 11.875 6.25 11.875C4.80977 11.875 4.07266 12.093 3.75 12.2309V18.125C3.75 18.2908 3.68415 18.4497 3.56694 18.5669C3.44973 18.6842 3.29076 18.75 3.125 18.75Z" fill="#112211"/>
  </g>
</svg>
      </Box>
      {/* <IconButton sx={{ color: 'black', opacity: 0.75 }}>
        <FlagIcon />
      </IconButton> */}
    </Box>
    </>
  );
};

export default Review;