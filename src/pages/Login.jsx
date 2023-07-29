import React, { useState } from 'react';
import Button from '@mui/material/Button';
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

const theme = createTheme();

export default function LoginSide() {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    if (!email.trim()) {
      alert("Please enter your Email Address.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid Email Address.");
      return;
    }

    if (!password.trim()) {
      alert("Please enter a Password.");
      return;
    }
    console.log({
      email,
      password,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            showArrows={false}
          >
            <div>
              <img src="src/assets/login/image1.png" alt="Slider 1" />
            </div>
            <div>
              <img src="src/assets/login/image2.png" alt="Slider 2" />
            </div>
            <div>
              <img src="src/assets/login/image3.png" alt="Slider 3" />
            </div>
          </Carousel>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              
            }}
          >
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
              LOGIN
            </Typography>
            <Typography sx={{ mb: 4 }}>
              Login to access your Golobe Account
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
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
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Remember me"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#8DD3BB" }}
              >
                Login
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  Don't have an account?
                  <Link href="#" variant="body2">
                    Signup
                  </Link>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  sx={{ marginTop: "10px" }}
                >
                  <Button component="a" href="#" target="_blank" rel="noopener noreferrer">
                    <Box
                      sx={{
                        width: "150px",
                        height: "56px",
                        border: "1px solid #8DD3BB",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        display: "flex",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          height: "30px",
                          width: "30px",
                          overflow: "hidden",
                          marginLeft: "60px",
                        }}
                      >
                        <img src="src/assets/login/google.png" alt="google" />
                      </Box>
                    </Box>
                  </Button>
                  <Button component="a" href="#" target="_blank" rel="noopener noreferrer">
                    <Box
                      sx={{
                        width: "150px",
                        height: "56px",
                        border: "1px solid #8DD3BB",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          height: "30px",
                          width: "30px",
                          overflow: "hidden",
                          marginLeft: "10px",
                        }}
                      >
                        <img src="src/assets/login/facebook.png" alt="facebook" />
                      </Box>
                    </Box>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
