//import React from 'react';
import { Box, Typography, Avatar, Grid, useTheme, useMediaQuery } from '@mui/material';
import Building from '../../assets/icons/Payment-icons/building.svg';
import Room from '../../assets/icons/Payment-icons/room.svg'
import {useState, useEffect} from 'react'
import axios from 'axios'


const formatDate = (dateString) => {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};



const Booking = () => {
 
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState(''); 
  const [type , setType] = useState('');
  const [room , setRoom] = useState('');

  useEffect(()=> {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3000/bookings/booking/64c38a1ff770801377a0cf9c');
        const data = response.data;
        const value = data[0];
        setCheckIn(value.reservation.checkInDate);
        setCheckOut(value.reservation.checkOutDate);
        setType(value.reservation.roomType);
        setRoom(value.reservation.numberOfRooms);
      }
      catch(error){
        console.error('Error fetching booking details:' , error);
      }
    };
    fetchBookingDetails();
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const boxStyle = {
    display: 'flex',
    width: '100%',
    maxWidth: '76.9375rem',
    maxHeight: '19.3rem',
    alignItems: 'center',
    marginTop: '1rem',
    
    
  };

  
  return (
    <Box style={boxStyle}>
      <Box
        style={{
          display: 'flex',
          width: isMobile ? '100%' : '13.4rem',
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
          <b>{formatDate(checkIn)}</b>
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
          <b>{formatDate(checkOut)}</b>
        </Typography>
        <Typography variant="caption">Check-out</Typography>
        </Grid>

        </Grid>
      </Box>

      <Box style={{  width: isMobile ? '100% ' : '38.1rem', height: '16.3rem', marginBottom: 16,flexDirection: 'column' , borderEndEndRadius: '16px'}}>
        <Grid container
          alignItems="center" 
          style={{
            padding: '1.0rem',
            backgroundColor: '#8DD3BB',
            borderStartEndRadius: '16px',
          }}
        >
          <Avatar style={{ width:'3rem', height: '3rem'}}src='https://s3-alpha-sig.figma.com/img/de42/3158/13dc5b2e20dc60002c5ebc10bec549e3?Expires=1691971200&Signature=ZHzAq5Bk5EtbGxurRfqS~zdOjE-gM~MqPhIhiy4~0oZeKBZuXxWQ5wO7oSi~GlRdCULMNOa3~PbJVxvkGF4uWBht40SUWPLZBpZGSdDV-BPFdE-Dm-isnLYdlFQDoRT~3w-ZAlKnAwkI6P93dDJiQhap2ud5nDX5utE5xFfx9Rn03Pub8acxrz7Tvc0kUjTdMzQujBNeSQ6xIMQzfd~bNipy04UMDozckMvKQg4GWJUWWXOYL6WSPubSADq0jvNXSEh5uYDCeXacb0cYslL1LtgbLPScjtJ2Cjyql~0hHZS2YBG4d6fly77Fit~d7k~zouNqX-G4CvfhN4PFkA8h-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'alt="image" />
          <Typography variant="body1" style={{ marginLeft: '1rem' }}>
            <b>John</b>
          </Typography>

          <Grid item xs={true} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Typography variant="body2"><b>{type}</b></Typography>
          </Grid>
          
        </Grid>
          
        <Grid container direction="row" display='flex'  spacing={isMobile ? 0 : 3} style={{ padding: '1.5rem' , }}>
        <Grid item sx={{marginTop:isMobile ? 0 : 1, marginLeft: '3rem', }}>
        <img src={Room} />
        </Grid>
        
        <Grid item style={{marginRight: '3rem'}}  >
        <Typography variant="caption">Number of Rooms
        </Typography>
        
        <Typography variant="body2" >
          <b>{room}</b>
        </Typography>
        </Grid>
      
        <Grid item sx={{marginTop:isMobile ? 0 : 1}}>
        <img src={Room} />
        </Grid>
        
        <Grid item >
        <Typography variant="caption">Room no
        </Typography>
        
        <Typography variant="body2" >
          <b>Onarrival</b>
        </Typography>
        </Grid>
      
       </Grid>
        
      </Box>
      <Box style={{ border: '1px solid #EAEAEA',width:isMobile ?'100%' : '23rem', height: '16.3rem', marginBottom : 16, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '16px'}}>
       <Box style={{  width: '10.5rem'}}>
        <img style={{width: '10rem', height: '10rem', }} src='https://s3-alpha-sig.figma.com/img/a8f8/a3bd/0fbb63b80b094364944041f8aa0cad46?Expires=1691971200&Signature=WY~42XaIAYkATC9RuIRqxivjxU0hBAAMVG70ai3YugMW638ysWkQDGxYy4~os0BUPvMYF~Ykb6UFxWZoXd3E8iT2WB13FRTtTqTLxHp4a2wLYld6TcVj2o2PHzsw~i9Xtg5E4cs-H5NZT8sFkZF3c10eKS0-Wo8Q7VcfqdycQ8xmSLE4F1bCNU2u~hX7i3pE8H~ZkJ8jpfKB3l3ovLrYAMOnpSNiaylyEq1SDQtUJhiyMy6A49HXfSEy9jxdLTiWWstpYXnbOPGrynNoo7VanqTYc~7vgBhF1Q1zVR1Fc~c4BoDWdTBL~ts5K0glQP3HHznwJ1gsRAEVP8YwsDpdRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
       </Box>
      </Box>
    </Box>
  );
};

export default Booking;
