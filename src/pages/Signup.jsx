import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import url from '../assets/login/image1.png'
const theme = createTheme();
export default function SignInSide() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const email = data.get('email');
    const phoneNumber = data.get('phone');
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');

    // Basic validation checks
    if (!firstName.trim()) {
      alert('Please enter your First Name.');
      return;
    }

    if (!lastName.trim()) {
      alert('Please enter your Last Name.');
      return;
    }

    if (!email.trim()) {
      alert('Please enter your Email Address.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid Email Address.');
      return;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
    }
    if (!password.trim()) {
      alert('Please enter a Password.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    const apiUrl = 'http://localhost:3200/auth/register';
    const requestData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword
    };
    const response = await axios.post(apiUrl, requestData)
      .then((response) => {
        console.log('API response:', response.data);
        navigate('/login');
      })
      .catch((error) => {
        console.error('API error:', error);
        if (error.response && error.response.data && error.response.data.message) {
          
          setSnackbarSeverity('error');
          setSnackbarMessage('Login failed: ' + error.response.data.message);
        } else {
          setSnackbarSeverity('error');
          setSnackbarMessage('Login failed. Please check your credentials.');
        }
        setSnackbarOpen(true);
      });
  };
  return (
  
    <ThemeProvider theme={theme}>
        <Box sx={{height:"100vh"}}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={8}
          md={6}
          sx={{
             display: 'flex',
              alignItems: 'center',
             justifyContent: 'center',
            height: '100%',
            padding: '100px',
          }}
        >
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            style={{ height: '50vh', width: '100%' }}
          >
            <img
              src={url}
              alt="Slider 1"
              style={{ width: '100%', objectFit: 'cover' }}

            />
            <img
              src={url}
              alt="Slider 2"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
            <img
              src={url}
              alt="Slider 3"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </Carousel>
        </Grid>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={7} square >
        <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              padding: '50px',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
              Sign up
            </Typography>

            <Typography sx={{ mb: 4 }}>
              Let's get you all set up so that you can access your own account
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="phone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="new-password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handlePasswordVisibility}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    autoComplete="new-password"
                    
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I agree to all the terms and privacy policy."
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, bgcolor: '#8DD3BB' }}>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  Already have an account?                  
                  <Link href="/login" variant="body2">
                    Login
                  </Link>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  sx={{ marginTop: '10px' }}
                >
                  <Button
                    component="a"
                    href="http://localhost:3200/auth/login?by=google"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <Box sx={{
                      width: "150px",
                      height: "56px",
                      border: "1px solid #8DD3BB",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex"
                    }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', height: '30px', width: '30px', overflow: 'hidden', marginLeft: '60px' }}>
                        <img src="src/assets/signup/google.png"
                          alt="google"
                        />
                      </Box>
                    </Box>
                  </Button>
                  <Button
                    component="a"
                    href="http://localhost:3200/auth/login?by=facebook"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <Box sx={{
                      width: "150px",
                      height: "56px",
                      border: "1px solid #8DD3BB",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex"
                    }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', height: '30px', width: '30px', overflow: 'hidden', marginLeft: '10px' }}>
                        <img src="src/assets/signup/facebook.png"
                          alt="facebook"

                        />
                      </Box>
                    </Box>
                  </Button>
                </Grid>
              </Grid>
            </Box>
            </Box>
        </Grid>
      </Grid>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
         <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </ThemeProvider>
   
  );
}