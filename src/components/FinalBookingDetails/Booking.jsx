import React from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import Building from '../../assets/icons/building.svg';
import avatar from '../../assets/icons/avatar.svg';
import Time from '../../assets/icons/time.svg'
import Room from '../../assets/icons/room.svg'
import Hotel from '../../assets/icons/hotel.svg'

const formatDate = (dateString) => {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};



const Booking = ({ bookingDetails }) => {
  const boxStyle = {
    display: 'flex',
    width: '100%',
    maxWidth: '76.9375rem',
    maxHeight: '19.3rem',
    alignItems: 'center',
    marginTop: '1rem',
    
    
  };

  const defaultBookingDetails = {
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
  };

  if (!bookingDetails) {
    return null;
  }

  const { name, checkInDate, checkOutDate, roomType, checkInTime, checkOutTime, roomNumber } = bookingDetails || defaultBookingDetails;

  return (
    <Box style={boxStyle}>
      <Box
        style={{
          display: 'flex',
          width: '13.4rem',
          height: '16.3rem',
          padding: '1.5rem',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignSelf: 'stretch',
          backgroundColor: '#EBF6F2',
          borderStartStartRadius: '16px',
          borderEndStartRadius: '16px',
          
        }}
      >
        <Grid container direction='column' spacing= {3}>

          <Grid item>
        <Typography variant="h6">
          <b>{formatDate(checkInDate)}</b>
        </Typography>
        <Typography variant="caption" >
          Check-in
        </Typography>
        </Grid>

        <Grid item >
        <img src={Building} />
        </Grid>

        <Grid item>
        <Typography variant="h6" >
          <b>{formatDate(checkOutDate)}</b>
        </Typography>
        <Typography variant="caption">Check-out</Typography>
        </Grid>

        </Grid>
      </Box>

      <Box style={{  width: '38.1rem', height: '16.3rem', marginBottom: 16,flexDirection: 'column' , borderEndEndRadius: '16px'}}>
        <Grid container
          alignItems="center" 
          style={{
            padding: '1.0rem',
            backgroundColor: '#8DD3BB',
            borderStartEndRadius: '16px',
          }}
        >
          <Avatar src={avatar} alt="image" />
          <Typography variant="body1" style={{ marginLeft: '1rem' }}>
            <b>{name}</b>
          </Typography>

          <Grid item xs={true} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Typography variant="body2"><b>{roomType}</b></Typography>
          </Grid>
          
        </Grid>
          
       <Grid container direction="row" spacing={1} style={{padding: '1.5rem'}}>

        <Grid item sx={{marginTop:1}}>
        <img src={Time} />
        </Grid>

        <Grid item style={{marginRight: 25}}>
        <Typography variant="caption">check-in time
        </Typography>
        
        <Typography variant="body2" >
          <b>{checkInTime}</b>
        </Typography>
        </Grid>

        <Grid item sx={{marginTop:1}}>
        <img src={Time} />
        </Grid>

        <Grid item style={{marginRight: 30}}>
        <Typography variant="caption">check-out time
        </Typography>
        
        <Typography variant="body2" >
          <b>{checkOutTime}</b>
        </Typography>
        </Grid>

        <Grid item sx={{marginTop:1}}>
        <img src={Room} />
        </Grid>
        
        <Grid item>
        <Typography variant="caption">room no
        </Typography>
        
        <Typography variant="body2" >
          <b>{roomNumber}</b>
        </Typography>
        </Grid>
      
       </Grid>
        
      </Box>
      <Box style={{ border: '1px solid #EAEAEA',width:'23rem', height: '16.3rem', marginBottom : 16, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '16px'}}>
       <Box style={{  width: '10.5rem'}}>
        <img src={Hotel} />
       </Box>
      </Box>
    </Box>
  );
};

export default Booking;
