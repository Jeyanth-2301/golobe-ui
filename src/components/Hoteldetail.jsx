import React from 'react'
import Detail from '../components/Detail'
import Hotelimage from '../components/Hotelimage';
import Top from '../components/Top'
import Overview from '../components/Overview'
import { Divider } from '@mui/material';

const Hoteldetail = () => {
  return (
    <div >
      <Top />
       <Detail />
        <Hotelimage />
        <Divider sx={{marginTop:'20px'}} />
        <Overview />
    </div>
  )
}

export default Hoteldetail