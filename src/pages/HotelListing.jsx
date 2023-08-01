import React from 'react'
import Hero from '../components/Header/Hero';
import { Box } from '@mui/material';
import Filter from '../components/HotelList/Filter'
import Hotels from '../components/HotelList/Hotels'
const HotelListing = () => {
    return (
        <div>
            <Filter ></Filter>
            <Hotels></Hotels>
            <Box sx={{ width: '20vh', height: '80vh' }}>
            </Box>

        </div>
    )
}

export default HotelListing;