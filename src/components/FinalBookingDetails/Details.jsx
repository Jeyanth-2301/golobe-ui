import React from 'react';
import {Container} from '@mui/material'
import Detail from './TitleCard';
import Booking from './Booking'
import Terms from './Terms'

const Main = () => {
  

  return (
    <>
      <Container id="pageContent" style={{paddingTop: '6rem'}}>
      <Detail/>
      <Booking  />
      <Terms />
      </Container>
      
    </>
  );
};

export default Main;

// const bookingDetails = {
  //   name: 'John Doe',
  //   email: 'john.doe@example.com',
  //   checkInDate: '',
  //   checkOutDate: '',
  //   roomType: 'Deluxe Room',
  //   checkInTime: '8.00am',
  //   checkOutTime: '9.00pm',
  //   roomNumber: 'onarrival',
  // };
