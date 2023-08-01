import React from 'react'
import { Typography,Paper,Grid,Box,Button } from '@mui/material' 
const roomsData= [
    {
      image: "https://s3-alpha-sig.figma.com/img/4f86/0f72/741a8e92ad33db85b590b0a1ce24e3fb?Expires=1691971200&Signature=E-VoSZr3osrBlQfFNg-ikhBVBepgYCDScC5tCkJH6lKbCkLWkAjUg8bYeH75DykMWKXHBqBZ5CyX2jyoYKZSHIvYL9FpgBnqq5zNLLLCIodl1JlZfAkVE8Kg-C8gz57iniqpFyp4dbH1IRndrKDqSjQHrd2R3MctIsuFJxvxxHdgXqjVJjAvljt5AShgKboZoy8xcwcph~37jE9-PG6g4MClQm4SgcFc4-witBsrhYQRXQt9GgXfuz4TLL6yiVfE1zh~24v397m3UfmxKyCNpTA5CltYFBZH-JVwS07i6CxGZme59g7fMtJ-4Iyj76wZtyMBhMUaeOO3A6ze889ecQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      description: 'Superior room - 1 double bed or 2 twin beds',
      price: 240,
      availablerooms:10
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/bc2c/f54b/df0bbbcf72d3512fe00942a04e2dbe63?Expires=1691971200&Signature=Oya5M5xj2O8x-tfhchyLXbLZWW8ZTx-LUj7xmyQCJ8JqP0ANUhRo348ZHE3uInQAjFLiYImsNIZVecJ0Gx5NmUhFMtJkuo4lg5DPNF6~gRy8h0xNvt2yf3imLUtLCLww4gStHbJbyMUObty136HXl7bVVI8LI56h4NSBQJ0SGYPatObnvZN33-6k~1IEFQvhqnpqdbse4ni2XWc0oS6IsVCKmjLszDIugweU5qbfMaSSjtCWY3TiYahTBf1n0QpzaurEdH~Jiuf1JZMRrpBqWGOjz-5tTYmcbGl2eQEmuPnwhMHopKTd~YD5dFYM6crvzWv3Tk5FWoBlAtgJQpOJhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      description: 'Superior room - City view  - 1 double bed or 2 twin beds',
      price: 280,
      availablerooms:1
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/49d4/f778/91ce3bbd9fa16b651e0ca896c8c9de77?Expires=1691971200&Signature=E3BH~gEUIsmzvgR9sNQNQyX6w4zJM4bE98hePP6QgLwItq6hODDjSK1EtN8FyWXayit6RuqcTBPK4ahroB5gL~-zmBfQnPO3ItfL2xevHsR8Z01RkaT22d3xYMypj8BFFWwzt~D9cABVI3x-Vnagu0~-xIKXE8oJfe5L1M-oYwMtRs9XVeonm46unSzZQxzUNhBU00snoCvVD6IpNGT7ev2kfSliBS7X5KiX-JwrplkWDwOS5BFMJHpsJDGPITqmExeyRbHeey5euXFlZILGOKYyPoOCydDBjQBB0Tlc3mB0kmaGMeRI1-0VEmr7C1Tl4Lpyngwtp9OTEdF0RL7UzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      description: 'Superior room - City view  - 1 double bed or 2 twin beds',
      price: 320,
      availablerooms:5
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/49d4/f778/91ce3bbd9fa16b651e0ca896c8c9de77?Expires=1691971200&Signature=E3BH~gEUIsmzvgR9sNQNQyX6w4zJM4bE98hePP6QgLwItq6hODDjSK1EtN8FyWXayit6RuqcTBPK4ahroB5gL~-zmBfQnPO3ItfL2xevHsR8Z01RkaT22d3xYMypj8BFFWwzt~D9cABVI3x-Vnagu0~-xIKXE8oJfe5L1M-oYwMtRs9XVeonm46unSzZQxzUNhBU00snoCvVD6IpNGT7ev2kfSliBS7X5KiX-JwrplkWDwOS5BFMJHpsJDGPITqmExeyRbHeey5euXFlZILGOKYyPoOCydDBjQBB0Tlc3mB0kmaGMeRI1-0VEmr7C1Tl4Lpyngwtp9OTEdF0RL7UzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      description: 'Superior room - City view  - 1 double bed or 2 twin beds',
      price: 380,
      availablerooms:3
    },
  ];
  const totalRooms = roomsData.reduce((total, room) => total + room.availablerooms, 0); 
  
  const Available= () => {
    
   return (
      <div>
        <Box sx={{ height: '346.5px',maxWidth: '100%'}}>
          <Typography variant="A">
            Available Rooms({totalRooms})
          </Typography> <br/>
          <Grid container spacing={3}>
            {roomsData.map((room, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} lg={8} container alignItems="center">
                  <Paper style={{ height: '48px', display: 'flex', boxShadow: 'none' }}>
                    <img src={room.image} alt={`Room ${index + 1}`} style={{ width: '48px', height: '48px' , objectFit: 'cover'}} />
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
                    <Button variant="contained" color="primary" style={{ width: '150px', height: '48px', backgroundColor: '#8DD3BB' }}>
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