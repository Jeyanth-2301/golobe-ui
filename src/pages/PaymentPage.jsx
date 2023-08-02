import { Box } from '@mui/material';
import React from 'react'
import Details from '../components/FinalBookingDetails/Details';

const PaymentPage = () => {
    return (
        <>
            <Details />
            <Box sx={{ width: '20vh', height: '80vh', border: '2px solid red' }}></Box>
        </>
    )
}

export default PaymentPage;