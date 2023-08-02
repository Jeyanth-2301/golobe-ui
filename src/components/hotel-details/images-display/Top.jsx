import React from 'react'
import { Typography } from '@mui/material'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const Top = () => {
  return (
    <div style={{width:'90vw',marginTop:'15vh',display: 'flex', }}>
        <Typography variant="pico" sx={{color:'#FF8682'}}>Turkey</Typography>
            <ChevronRightOutlinedIcon fontSize='small' />
            <Typography variant="pico" sx={{color:'#FF8682'}} >Istanbul</Typography>
              <ChevronRightOutlinedIcon fontSize='small' />
            <Typography variant="pico" sx={{color:'#121'}}>CVK Park Bosphorus Hotel Istanbul 
            </Typography>
       </div>
  )
}

export default Top