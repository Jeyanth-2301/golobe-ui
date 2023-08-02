import React from 'react'
import Hero from '../components/Header/Hero';
import { Box } from '@mui/material';
import Filter from '../components/HotelList/Filter';
import Hotels from '../components/HotelList/Hotels';
import Divider from '@mui/material/Divider';

const HotelListing = () => {
    return (
        <div>
            <Hero />
            <Filter />
            <Hotels />
            <Box sx={{ width: '20vh', height: '40vh' }}></Box>
        </div>
    )
}

export default HotelListing;
