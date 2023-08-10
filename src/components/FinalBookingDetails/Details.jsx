import React from 'react';
import { Container, } from '@mui/material'
import Detail from './TitleCard';
import Booking from './Booking'
import Terms from './Terms'


const Main = () => {



  return (
    <>

      <Container id="pageContent" style={{ marginTop: '5rem', width: '100%' }}>

        <Detail />
        <Booking />
        <Terms />
      </Container>

    </>
  );
};

export default Main;

