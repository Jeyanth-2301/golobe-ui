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
        <Box sx={{ height: '346.5px', width: '100%'}}>
          <Typography variant="A">
            Available Rooms({totalRooms})
          </Typography> <br />
          <Grid container spacing={3}>
            {roomsData.map((room, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} lg={8} container alignItems="center">
                  <Paper style={{ height: '48px', display: 'flex', boxShadow: 'none' }}>
                    <img src={room.image} alt={`Room ${index + 1}`} style={{ width: '48px', height: '48px' , objectFit: 'cover', marginLeft:16}} />
                    <div style={{ flex: 1, padding: '0 16px' }}>
                    <Typography variant="B">
                     {room.description} ({room.availablerooms})
                    </Typography>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper style={{ height: '48px', display: 'flex', justifyContent: "flex-end", boxShadow: 'none' }}>
                    <Typography variant="C">
                    {room.price}
                    </Typography>
                    <Typography variant="D">
                      /night
                    </Typography>
                    <Button variant="contained" color="primary" style={{ width: '150px', height: '48px', backgroundColor: '#8DD3BB', marginRight:16 }}>
                      <Typography variant="E">
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