//import React from 'react'
import { Typography } from '@mui/material'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const Top = () => {
  return (
    <div style={{ marginTop:'135px',width:'600px',display: 'flex' }}>
        <Typography sx={{color:'#FF8682'}}>Turkey</Typography>
            <ChevronRightOutlinedIcon fontSize='small' />
            <Typography sx={{color:'#FF8682'}} >Istanbul</Typography>
              <ChevronRightOutlinedIcon fontSize='small' />
            <Typography sx={{color:'#121'}}>CVK Park Bosphorus Hotel Istanbul 
            </Typography>
       </div>
  )
}

export default Top