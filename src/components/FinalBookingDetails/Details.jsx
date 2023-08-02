import React from 'react';
import { Box } from '@mui/material'
import Detail from './TitleCard';
import Booking from './Booking'
import Terms from './Terms'
import Top from '../hotel-details/images-display/Top';

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
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0px 10%' }}>
                <Top />
                <Detail />
                <Booking bookingDetails={bookingDetails} />
                <Terms />
            </Box>
        </>
    );
};

export default Main;