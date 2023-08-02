import React from 'react';
import {Container} from '@mui/material'
import Detail from './TitleCard';
import Booking from './Booking'
import Terms from './Terms'

const Main = () => {
  const bookingDetails = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    checkInDate: '2023-08-10',
    checkOutDate: '2023-08-15',
    roomType: 'Deluxe Room',
    checkInTime: '8.00am',
    checkOutTime: '9.00pm',
    roomNumber: 'onarrival',
  };

  return (
    <>
      <Container id="pageContent" style={{border: '1px solid'}}>
      <Detail/>
      <Booking bookingDetails={bookingDetails} />
      <Terms />
      </Container>
      
    </>
  );
};

export default Main;
