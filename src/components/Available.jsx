import React from 'react'
import { Typography,Paper,Grid,Box,Button } from '@mui/material' 
import room1Image from'../assets/image1.png'
import room2Image from'../assets/image2.png'
import room3Image from'../assets/image3.png'
import room4Image from'../assets/image4.png'
const roomsData= [
    {
      image: room1Image,
      description: 'Superior room - 1 double bed or 2 twin beds',
      price: 240,
      availablerooms:10
    },
    {
      image: room2Image,
      description: 'Superior room - City view  - 1 double bed or 2 twin beds',
      price: 280,
      availablerooms:1
    },
    {
      image: room3Image,
      description: 'Superior room - City view  - 1 double bed or 2 twin beds',
      price: 320,
      availablerooms:5
    },
    {
      image: room4Image,
      description: 'Superior room - City view  - 1 double bed or 2 twin beds',
      price: 380,
      availablerooms:3
    },
  ];
  const totalRooms = roomsData.reduce((total, room) => total + room.availablerooms, 0); 
  
  const Available= () => {
    
   return (
      <div>
        <Box sx={{ height: '346.5px', maxWidth: '1232px'}}>
          <Typography style={{ fontFamily: 'TradeGothic-LT-Extended', fontSize: '20px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }}>
            Available Rooms({totalRooms})
          </Typography> <br />
          <Grid container spacing={3}>
            {roomsData.map((room, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} lg={8} container alignItems="center">
                  <Paper style={{ height: '48px', display: 'flex', boxShadow: 'none' }}>
                    <img src={room.image} alt={`Room ${index + 1}`} style={{ width: '48px', height: '48px' , objectFit: 'cover'}} />
                    <div style={{ flex: 1, padding: '0 16px' }}>
                    <Typography style={{ padding: "16px", fontFamily: 'Montserrat', color: '#121', height: '20px', width: '354px', fontSize: '16px', alignSelf: 'center', marginRight: '40px', fontWeight: 500, fontStyle: 'normal' ,whiteSpace:'nowrap'}}>
                     {room.description} ({room.availablerooms})
                    </Typography>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper style={{ height: '48px', display: 'flex', justifyContent: "flex-end", boxShadow: 'none' }}>
                    <Typography style={{ color: '#121', fontFamily: 'Montserrat', marginRight: '-56px', alignSelf: 'center', height: '29px', width: '105px', fontWeight: 600, fontStyle: 'normal', fontSize: '24px', lineHeight: 'normal' }}>
                    {room.price}
                    </Typography>
                    <Typography style={{ fontFamily: 'Montserrat', color: '#121', fontSize: '14px', alignSelf: 'center', marginRight: '50px', fontWeight: 600, fontStyle: 'normal', lineHeight: 'normal' }}>
                      /night
                    </Typography>
                    <Button variant="contained" color="primary" style={{ width: '150px', height: '48px', backgroundColor: '#8DD3BB' }}>
                      <Typography style={{ fontFamily: 'Montserrat', fontHeight: '16px', fontWeight: 600, fontStyle: 'normal', lineHeight: 'normal', textTransform: 'none', weight: '93px', color: '#121' }}>
                        Book now
                      </Typography>
                    </Button>
                  </Paper>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </div>
    );
  };
  
  
  
  export default Available