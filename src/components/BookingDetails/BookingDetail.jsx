import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PopupForm from '../BookingDetails/PopupForm';
import check from '../../assets/icons/Booking-icons/checking.png';
import axios from 'axios';
import Confetti from 'react-confetti';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const BookingDetail = () => {

  const [location, setLocation] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [room, setRoom] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }




  useEffect(() => {

    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:3000/hotels/64c7a67362874d48eb6d3ed2');
        const res = await axios.get('http://localhost:3000/bookings/booking/64c38a1ff770801377a0cf9c');
        const data = response.data;
        setLocation(data.location.address);
        setHotelName(data.hotelName);

        const reservationValue = res.data;
        const firstReservation = reservationValue[0];
        const roomType = firstReservation.reservation.roomType;
        const checkInDate = firstReservation.reservation.checkInDate;
        const checkOutDate = firstReservation.reservation.checkOutDate;
        setRoom(roomType);
        setCheckin(checkInDate);
        setCheckout(checkOutDate);

      } catch (error) {
        console.error('Error in fetching:', error);
      }
    };

    fetch();
  }, []);



  const items = [
    { name: "Base Fare", price: 240 },
    { name: "Discount", price: 0 },
    { name: "Taxes", price: 20 },
    { name: "Service Fee", price: 5 }
  ];
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const [showRadioButton, setShowRadioButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const handleContinueClick = () => {
    setShowRadioButton(true);
  };
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    setIsRadioButtonClicked(true);
  };
  const [showPopup, setShowPopup] = useState(false);
  const handleOpenPopup = () => {
    setShowPopup(true);

  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const [selectedCards, setSelectedCards] = useState([]);
  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("storedCards")) || [];
    setSelectedCards(storedCards);
  }, []);


  const getLast8Digits = (cardNumber) => {
    return " **** " + cardNumber.slice(-4);
  };
  // Callback function to receive the selected credit card details from the popup
  const handleCardSelection = (cardNumber, expDate) => {
    const formattedCardNumber = getLast8Digits(cardNumber);
    const newCard = { cardNumber: formattedCardNumber, expDate };
    setSelectedCards((prevCards) => [...prevCards, newCard]); // Add the new card to the array
    handleClosePopup();
  };
  const [isRadioButtonClicked, setIsRadioButtonClicked] = useState(false);
  const [showNewButton, setShowNewButton] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const handleButtonClick = () => {
    setShowNewButton(false);
    setShowPaymentPopup(true);
    setShowConfetti(true);
    setTimeout(() => {
      setShowPaymentPopup(false);
      setShowConfetti(false);
      setTimeout(() => {
        // Hide the "Pay Now" button
        setShowNewButton(true);  // Show the "View Booking" button
      }, 500);
    }, 4000);


  };
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  return (
    <div>
      <Box sx={{ height: "100vh" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box sx={{ margin: '40px', paddingTop: '15vh', paddingLeft: '4vh', height: 'wrap', width: '110vh', alignItems: 'center', display: 'flex' }}>
            <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: '30rem' }}>
              <Typography variant="a"> <strong>{room}</strong></Typography>
            </div>
            <Typography variant="b" sx={{ color: '#FF8682' }}>$240/night</Typography>
          </Box>
          <Box sx={{
            marginLeft: '50px', padding: '4vh', height: '184px', width: '742px', alignItems: 'center', border: '1px solid #000',
            borderRadius: '10px'
          }} >
            <Typography variant="c">
              {hotelName}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '135px' }}>
              <LocationOnIcon fontSize='small' />
              <Typography variant="d">
                {location}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px', justifyContent: 'space-between' }}>
              <Typography variant='e'><strong>
                {formatDate(checkin)}</strong>
              </Typography>
              <Box
                sx={{
                  width: '180px',
                  height: '50px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  marginTop: 2, // Prevent the image container from shrinking
                  marginRight: 2.5, // Ensure image stays within the box
                }}
              >
                <img
                  src={check} // Replace with the actual URL of your image
                  alt="checking img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', justifyContent: 'space-between' }} // Make the image cover the entire box
                />
              </Box>
              <Typography variant='f'><strong>
                {formatDate(checkout)}</strong>
              </Typography>
            </Box>
          </Box>
          {/* 
<Grid container justifyContent="left" alignItems="flex-start"> */}
          <Box sx={{ marginTop: '20px', marginLeft: '30px', padding: '2vh', height: 'wrap', width: '105.2vh', alignItems: 'left' }}>
            {!showRadioButton ? (
              <React.Fragment>
                <Button variant="contained" style={{ zIndex: 1 }} fullWidth onClick={handleContinueClick}>
                  Proceed With Payment
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <RadioGroup value={selectedOption} onChange={handleRadioChange}>
                  {selectedCards.map((card, index) => (
                    <Box
                      key={index}
                      sx={{
                        borderRadius: '10px',
                        bgcolor: '#8dd3bb',
                        marginTop: '5px',
                        padding: '2vh',
                        width: '101.1vh',
                        alignItems: 'left',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography style={{ marginLeft: '1px' }}>{card.cardNumber} {card.expDate}</Typography>
                      <FormControl>
                        <FormControlLabel
                          key={index}
                          value={`${card.cardNumber} ${card.expDate}`}
                          control={<Radio color='secondary' />}
                          labelPlacement="start"
                          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: '15px', marginLeft: '1px' }}
                        />
                      </FormControl>
                    </Box>
                  ))}
                </RadioGroup>
                <Box
                  border="2px dashed #000"
                  borderRadius="10px"
                  borderColor="#8dd3bb"
                  marginTop={'20px'}
                  marginLeft={'4px'}
                  padding={2}
                  width={'100.3vh'}
                  height={110}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  onClick={handleOpenPopup}
                  style={{ cursor: 'pointer' }}
                >
                  <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
                    <AddCircleOutlineIcon style={{ fontSize: 40, color: '#8dd3bb' }} />
                  </Box>
                  <Box textAlign="center">
                    <Typography variant="h6" color="grey" >
                      Add New Card
                    </Typography>
                  </Box>
                </Box>
                <PopupForm open={showPopup} handleClosePopup={handleClosePopup} handleCardSelection={handleCardSelection} />
              </React.Fragment>
            )}
          </Box>
        </Grid>
        <Grid
          item
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-end"
          position={'absolute'}
          style={{ position: 'absolute', bottom: '3.6vh', right: '20px' }}
        >
          <Box sx={{
            margin: '50px', marginLeft: '30px', padding: '2vh', height: 'wrap', width: '575px', alignItems: 'center', border: '1px solid #000',
            borderRadius: '10px'
          }} >
            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  width: 120,
                  height: 121,
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  overflow: 'hidden',
                  flexShrink: 0, // Prevent the image container from shrinking
                  marginRight: 5 // Ensure image stays within the box
                }}
              >
                <img
                  src={"https://s3-alpha-sig.figma.com/img/b19f/9d49/ebdd5f84ef0bb53eaf91137e26985a04?Expires=1691971200&Signature=Ag4pRSVkpjz6J9t7XDn8vEx1q52ZguX9FKI~f43YNxez7OMk3SJ53OVQBT~wPsgf6F9ZkbyUnVogZv19S7qVw9~XaEsz3VOI0xx6hn2z4VPEsck8YJ2t27yofAaaS~P62WZUzLoieK-ddalSJfPBZ7PMVU0tBCzWb3cz-1a4K1sk0vltoqTe0Sebc-5kkmpSye1js4uYKz2rPswaBWDWeRXUMV2amN164yURq2ai3Fs6RiW8V-cQ8S0Xy8vmi47tJiCDK7ty1A6Dk5CGL4kEETyms9dcBwEuf5oezbbAFlRdM3IFBfe5PYKaQPGCS0lOM-Ranu4HJdE4vLl7cAhkLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} // Replace with the actual URL of your image
                  alt="Superior Room with double bed or twin beds"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Make the image cover the entire box
                />
              </Box>
              <Box flexGrow={1}>
                <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: '100%' }}>
                  <Typography variant='z'><strong>{room}</strong></Typography>
                </div>
              </Box>
            </Box>
            <div
              style={{
                width: '100%',
                height: '1px',
                background: 'grey',
                marginTop: '18px',
              }}
            />
            <Typography variant='y'>Your booking is protected by<strong> Golobe</strong></Typography>
            <div
              style={{
                width: '100%',
                height: '1px',
                background: 'grey',
                marginTop: '3px',
                marginBottom: '10px'
              }}
            />
            <Typography variant="x"><strong>Price Details</strong></Typography>
            {items.map((item, index) => (
              <Grid container key={index}>
                <Grid item xs={6}>
                  <Typography variant='w'>{item.name}</Typography>
                </Grid>
                <Grid item xs={6} textAlign="right">
                  <Typography variant="v">
                    <strong>{`$${item.price}`}</strong>
                  </Typography>
                </Grid>
              </Grid>
            ))}
            <div
              style={{
                width: '100%',
                height: '1px',
                background: 'grey',
                marginRight: '10px',
                marginBottom: '9px',
                marginTop: '10px',
              }}
            />
            {/* Total Price */}
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="w">Total</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography variant="v">
                  <strong>{`$${totalPrice}`}</strong>
                </Typography>
              </Grid>
            </Grid>
          </Box>
          {isRadioButtonClicked && (
            <Button variant="contained" style={{ zIndex: 1, width: '578px', marginLeft: '28px' }} onClick={handleButtonClick}>
              Pay Now
            </Button>
          )}
          {showNewButton && (
            <Box style={{ marginTop: '20px', marginLeft: '248px' }}>
              <Link to="/payment-page">
                <Button variant="contained" style={{ backgroundColor: '#FF8682' }} >
                  View Booking
                </Button></Link>
            </Box>
          )}
          {showPaymentPopup && (

            <Paper
              sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '80px',
                backgroundColor: '#FF8682',
                color: 'black',
                border: '1px solid #000',
                borderRadius: '8px',
                textAlign: 'center',
                zIndex: 1000,
              }}
            >

              {showConfetti && (

                <Confetti
                  width={Box.width}
                  height={Box.innerHeight}
                  recycle={false}
                  numberOfPieces={1000}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                  }}
                  onComplete={() => setShowConfetti(false)}
                />
              )}
              <Typography><strong>Payment Successful !!!</strong></Typography>
            </Paper>
          )}
        </Grid>
      </Box>
    </div>
  );
};
export default BookingDetail;