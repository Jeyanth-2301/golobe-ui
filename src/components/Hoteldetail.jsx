import React from 'react'
import Detail from '../components/Detail'
import Hotelimage from '../components/Hotelimage';
import Top from '../components/Top'
import Overview from '../components/Overview'

const Hoteldetail = () => {
  return (
    <div >
      <Top />
       <Detail />
        <Hotelimage />
        <Overview />
    </div>
  )
}

export default Hoteldetail