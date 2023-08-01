import React from 'react'
import Detail from '../components/Detail'
import Hotelimage from '../components/Hotelimage';
import Top from '../components/Top'
import Overview from '../components/Overview'
import { Divider,Box } from '@mui/material';

const Hoteldetail = () => {
  return (
    <div >
      <Box sx={{display:"flex",flexDirection:'column',marginLeft:'4.7%'}}>
      <Top />
      </Box>
      <Box sx={{display:"flex",flexDirection:'column',alignItems:'center'}}>
       <Detail />
        <Hotelimage />
        <hr style={{ width: '90.1vw', marginTop:"11vh", border: '1px solid #ccc' }} />
       
        <Overview />
        </Box>
    </div>
  )
}

export default Hoteldetail