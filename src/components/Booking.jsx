import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';

const ConfirmationForm = ({ bookingDetails }) => {
    if (! bookingDetails){
        return null ;
    }
  const { name, email, checkInDate, checkOutDate, roomType } = bookingDetails;

  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant="h6">Booking Confirmation</Typography>
      <Typography variant="body1">Name: {name}</Typography>
      <Typography variant="body1">Email: {email}</Typography>
      <Typography variant="body1">Check-in: {checkInDate}</Typography>
      <Typography variant="body1">Check-out: {checkOutDate}</Typography>
      <Typography variant="body1">Room Type: {roomType}</Typography>
      <Button variant="contained" color="primary" onClick={() => window.print()}>
        Print Confirmation
      </Button>
    </Paper>
  );
};

export default ConfirmationForm;
