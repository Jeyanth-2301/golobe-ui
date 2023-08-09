import { Typography, Paper, Grid, Box, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Available = () => {
  const [images, setImages] = useState([]);
  const [roomRates, setRoomRates] = useState([]);
  const [totalRooms, setTotalRooms] = useState(0);
  const [hotelId, setHotelid] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const askLoggedInStatus = async (roomId, index, event) => {
    event.stopPropagation();
    try {
      const response = await fetch(
        "http://localhost:3200/auth/users/user/islogined",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );

      if (response.ok) {
        const responseData = await response.json();

        if (responseData.success) {
          const query = `?hid=${encodeURIComponent(hotelId)}&rid=${encodeURIComponent(roomId)}&rii=${encodeURIComponent(index)}`;
          navigate(`/booking-details${query}`);
        } else {
          // setLoggedIn(false);
          console.log("User is not logged in.");
        }
      } else {
        console.log("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };


  const fetchData = async () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const hotelId = params.get('q');
      const url = `http://localhost:3200/hotels/${hotelId}`;
      const response = await axios.get(url)
      const data = response.data;
      if (data) {
        setImages(data.images.slice(1, 8));
        setRoomRates(data.rooms);
        setTotalRooms(data.totalRooms);
        setHotelid(data._id);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleBooking = (roomId, index, event) => {
    event.stopPropagation();
    const query = `?hid=${encodeURIComponent(hotelId)}&rid=${encodeURIComponent(roomId)}&rii=${encodeURIComponent(index)}`;
    navigate(`/booking-details${query}`);
  }
  const minImageLength = Math.min(images.length, roomRates.length);
  return (
    <div>
      <Box sx={{ height: '50vh', width: '90vw', marginTop: "11vh" }}>
        <Typography variant="A">
          Available Rooms ({totalRooms})
        </Typography> <br />
        <div style={{ height: '37vh', overflow: 'auto' }}>
          <Grid container spacing={3}>
            {images.slice(0, minImageLength).map((image, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} lg={8}>
                  <Paper style={{ height: '48px', display: 'flex', boxShadow: 'none' }}>
                    <img src={image} alt={`Room ${index + 1}`} style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                    <div style={{ flex: 1, padding: '0 16px' }}>
                      <Typography variant="B">
                        {roomRates[index]?.roomType} - {roomRates[index]?.roomSpecification} ({roomRates[index]?.roomCount}){index}
                      </Typography>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper style={{ height: '48px', display: 'flex', justifyContent: "flex-end", boxShadow: 'none' }}>
                    <Typography variant="C">
                      {roomRates[index]?.roomRate}
                    </Typography>
                    <Typography variant="D">
                      /night
                    </Typography>
                    <Button variant="contained" color="primary" style={{ width: '150px', height: '48px', backgroundColor: '#8DD3BB' }} onClick={(event) => askLoggedInStatus(roomRates[index]?._id, index, event)}>
                      <Typography variant="E">
                        Book now
                      </Typography>
                    </Button>
                  </Paper>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </Box>
    </div>
  );
};
export default Available;