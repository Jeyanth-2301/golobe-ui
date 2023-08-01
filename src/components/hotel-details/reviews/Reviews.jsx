import React, { useState } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';
import {Container, Divider, Button } from '@mui/material';

const Reviews = ({ reviews, setReviews, averageRating }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  // Calculate the index of the first and last review on the current page
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleReviewSubmit = (newReview) => {
    // Add the new review to the existing reviews
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
  };

  return (
    <Container sx={{ py: 4 }}>
      {currentReviews.map((review, index) => (
        <div key={review.id}>
          <Review {...review} />
          {index !== currentReviews.length - 1 && <Divider sx={{ my: 2 }} />}
        </div>
      ))}
      {/* Pagination buttons */}
      <Button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        sx={{ mt: 2 }}
      >
        Previous
      </Button>
      <Button
        disabled={indexOfLastReview >= reviews.length}
        onClick={() => handlePageChange(currentPage + 1)}
        sx={{ mt: 2, ml: 2 }}
      >
        Next
      </Button>
      <ReviewForm onReviewSubmit={handleReviewSubmit} />
    </Container>
  );
};

export default Reviews;
