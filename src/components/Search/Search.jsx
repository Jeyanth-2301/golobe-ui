import React from 'react'
import theme from '../../utils/theme/theme.jsx';
import { Box, Paper, TextField, InputAdornment, Grid, MenuItem, FormControl, Typography, Button } from '@mui/material';
import DirectionsCarSharpIcon from '@mui/icons-material/DirectionsCarSharp';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { styled } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react';
import build from '../../assets/icons/search-icons/build.svg';
import car from '../../assets/icons/search-icons/car.svg';
import person from '../../assets/icons/search-icons/person.svg'

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#1C1B1F"
  },
  "& .MuiFormLabel-root": {
    fontSize: '19px', fontFamily: "Montserrat, sans-serif", color: '#1C1B1F'

  },

  width: "220px",
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "gray"
    }
  }
});


const StyledButton = styled(Button)({
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    background: theme.palette.primary.main
  }
  ,
  boxShadow: "none",

  color: 'black'
});





const Search = () => {

  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfRooms, setNumberOfRooms] = useState(1);

  const [searchresults, setSearchResults] = useState([]);

  const handleDest = (e) => {
    setDestination(e.target.value);
  };
  const handleCheckIn = (e) => {
    setCheckInDate(e.target.value);
  };
  const handleCheckOut = (e) => {
    setCheckOutDate(e.target.value);
  };
  const handleRooms = (e) => {
    setNumberOfRooms(e.target.value);
  };





  const handleSearch = async () => {
    try {
      const url = `http://localhost:3000/app/search?q=${encodeURIComponent(
        destination
      )}&checkIn=${encodeURIComponent(
        checkInDate
      )}&checkOut=${encodeURIComponent(
        checkOutDate
      )}&rooms=${encodeURIComponent(numberOfRooms)}`;

      console.log(url);

      const response = await fetch(url);
      const data = await response.json();
      setSearchResults(data);

      console.log("data", data);
    } catch (error) {
      console.error("Error occurred during fetch:", error);
    }
  };



  return (
    <ThemeProvider theme={theme}>

      <Paper elevation={3} sx={{ width: "90vw", height: '35vh', borderRadius: '16px' }} >
        <Box sx={{ paddingTop: '20px', marginLeft: 4 }}>
          <Typography variant="sideheading">Where are you staying?</Typography>
        </Box>
        <FormControl >
          < Grid container direction="row" spacing={2} sx={{ marginTop: '10px', marginLeft: 2 }} >
            <Grid item>
              <StyledTextField
                variant='outlined'
                label="Enter Destination" id="destination"
                sx={{ width: '400px' }}
                value={destination}
                onChange={handleDest}
                autoComplete='off'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={car} />
                    </InputAdornment>
                  ),
                }} ></StyledTextField></Grid>

            <Grid item>
              <StyledTextField type="date" label="Check In" variant='outlined'
                id="checkin"
                InputLabelProps={{ shrink: true }}
                value={checkInDate}
                onChange={handleCheckIn}
              ></StyledTextField></Grid>

            <Grid item><StyledTextField type="date" label="Check Out" id="checkout"
              variant='outlined'
              value={checkOutDate}
              onChange={handleCheckOut}
              InputLabelProps={{ shrink: true }}></StyledTextField></Grid>


            <Grid item ><StyledTextField label="Rooms & Guests" sx={{ width: '250px' }} id="rooms"
              dafaultValue="1 Room,1 Guest"
              value={numberOfRooms}
              onChange={handleRooms}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={person} />
                  </InputAdornment>
                ),
              }}

            >
            </StyledTextField>
            </Grid>
          </Grid>
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3%', padding: '0% 4%' }}>
          <Button
            variant="text"
            disableRipple
            disableElevation
            sx={{ color: 'black', '&:hover': { backgroundColor: 'transparent' }, marginRight: 2 }}
            startIcon={<AddIcon />}
          >
            Add Promo Code
          </Button>
          <StyledButton
            variant="outlined"
            disableElevation
            disableRipple
            startIcon={<img src={build} alt="Build Icon" />}
            onClick={handleSearch}
          >
            Show Places
          </StyledButton>
        </Box>

      </Paper>
    </ThemeProvider>
  )
}

export default Search