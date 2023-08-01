import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
import Hero from '../components/Header/Hero'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom';


const FindStays = () => {
    return (
        <div>
            <Hero />
            <Box sx={{ width: '20vh', height: '40vh', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>Link to HotelListing
                <Button>
                    <Link to="/search-results" >HotelListing</Link>
                </Button>
            </Box>
        </div>
    )
}

export default FindStays
// Hello
