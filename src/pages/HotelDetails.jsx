//import React from 'react'
//import Navbar from '../components/Navbar'
//import Footer from '../components/Footer'
//import Hero from '../components/Hero'
import { Box } from '@mui/material'
import Rooms from '../components/Rooms'
import FullReview from '../components/reviews/FullReview'

const HotelDetails = () => {
    return (
        <>
        <Box sx={{alignItems:'center', display:'flex', flexDirection:'column', gap:8}}>
            {/*<Navbar></Navbar>
            <Footer></Footer>*/}
            <Rooms/>
            <FullReview/>
        </Box>
        </>
    )
}

export default HotelDetails