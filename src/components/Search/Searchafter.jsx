import React from 'react'
import theme from '../../utils/theme/theme.jsx';
import { Box, Paper, TextField, InputAdornment, Grid, MenuItem, FormControl, Typography, Button, IconButton } from '@mui/material';
import DirectionsCarSharpIcon from '@mui/icons-material/DirectionsCarSharp';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RoomIcon from '@mui/icons-material/Room';
import { useState } from 'react';
import { styled } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react';
import build from '../../assets/icons/search-icons/build.svg';
import car from '../../assets/icons/search-icons/car.svg';
import location from '../../assets/icons/search-icons/location.svg';
import { Link , useNavigate} from 'react-router-dom';

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





const Searchafter = ({dest,checkin,checkout,rooms}) => {



//   const navigate=useNavigate();

//   const [destination, setDestination] = useState('');
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');
//   const [numberOfRooms, setNumberOfRooms] = useState(1);

//   const [searchresults, setSearchResults] = useState([]);

//   const handleDest = (e) => {
//     setDestination(e.target.value);
//   };
//   const handleCheckIn = (e) => {
//     setCheckInDate(e.target.value);
//   };
//   const handleCheckOut = (e) => {
//     setCheckOutDate(e.target.value);
//   };
//   const handleRooms = () => {
//     setNumberOfRooms(numberOfRooms + 1);
//   };


  


// const handleSearch=()=>{

//     const queryString = `?q=${encodeURIComponent(destination)}&checkIn=${encodeURIComponent(checkInDate)}&checkOut=${encodeURIComponent(checkOutDate)}&rooms=${encodeURIComponent(numberOfRooms)}`;
//     navigate(`/hotel-listing${queryString}`);



//   }
   

  



  return (
    <ThemeProvider theme={theme}>

      <Paper elevation={3} sx={{ width: "75vw", height: '20vh', borderRadius: '16px',marginTop:'9%' }} >
      
        <FormControl >
          < Grid container direction="row" spacing={2} sx={{ marginTop: '10px', marginLeft: 2 }} >
            <Grid item>
              <StyledTextField
                variant='outlined'
                label="Enter Destination" id="destination"
                sx={{ width: '340px' }}
                value={dest}
              
                autoComplete='on'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={location} />
                    </InputAdornment>
                  ),
                }} ></StyledTextField></Grid>

            <Grid item>
              <StyledTextField type="date" label="Check In" variant='outlined'
                id="checkin"
                InputLabelProps={{ shrink: true }}
                value={checkin}
              
              ></StyledTextField></Grid>

            <Grid item><StyledTextField type="date" label="Check Out" id="checkout"
              variant='outlined'
              value={checkout}
           
              InputLabelProps={{ shrink: true }}></StyledTextField></Grid>


            <Grid item ><StyledTextField label="Rooms" sx={{ width: '250px' }} id="rooms"
              value={rooms}

              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={car} />
                  </InputAdornment>
                ),
              
              }}

            >
            </StyledTextField>
            </Grid>
          </Grid>
        </FormControl>
        {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3%', padding: '0% 3.8%' }}>
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
       
        </Box> */}

      </Paper>
    </ThemeProvider>
  )
}

export default Searchafter