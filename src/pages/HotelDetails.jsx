/* eslint-disable no-unused-vars */
import React from 'react'
import Detail from '../components/hotel-details/images-display/Detail'
import Hotelimage from '../components/hotel-details/images-display/Hotelimage'
import Top from '../components/hotel-details/images-display/Top'
import Overview from '../components/hotel-details/overviewsection/Overview'
import { Box } from '@mui/material'
import Rooms from '../components/hotel-details/availablerooms/Rooms'
import FullReview from '../components/hotel-details/reviews/FullReview'

const Hoteldetail = () => {
    return (
        <div>
            <Box sx={{ display: "flex", flexDirection: 'column', marginLeft: '4.7%' }}>
                <Top />
            </Box>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                <Detail />
                <Hotelimage />
                <hr style={{ width: '90.1vw', marginTop: "11vh", border: '0.1px solid #ccc' }} />
                <Overview />
                <hr style={{ width: '90.1vw', marginTop: "11vh", border: '0.1px solid #ccc' }} />
                <Rooms />
                <hr style={{ width: '90.1vw', marginTop: "11vh", border: '0.1px solid #ccc' }} />
                <FullReview />
            </Box>
        </div>
    )
}

export default Hoteldetail