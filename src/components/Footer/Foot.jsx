import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Link, Card } from '@mui/material';
import instagram from '../../assets/icons/footer-icons/instagram.svg';
import facebook from '../../assets/icons/footer-icons/facebook.svg';
import twitter from '../../assets/icons/footer-icons/twitter.svg';
import logo from '../../assets/icons/footer-icons/logo.svg';

const Foot = () => {

  const [email, setEmail] = useState('');
  const [validEmail, setvalidEmail] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

  };

  const handleSubscribe = () => {

    const emailPattern = /^[a-z][a-z0-9]*@[a-z]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      setvalidEmail(false);
      return;
    }
    alert("Thankyou for your Subscription");
    setEmail('');
    setvalidEmail(true);
  };



  return (

    <footer style={{ backgroundColor: '#8DD3BB', color: 'white', padding: '20px 0px', bottom: 0, left: 0, right: 0, height: '350px', maxWidth: '1440' }}>

      < Container maxWidth="md" style={{ marginTop: '-180px', position: 'relative', top: '50%', left: '40%', transform: 'translate(-40%, -35%)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1, maxWidth: '1500px', maxHeight: '500px' }}>
        <Card style={{ maxWidth: '1500px', maxHeight: '200px', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '80px', width: '100%', borderRadius: '16px', backgroundColor: "#CDEAE1" }}>
          <Grid container direction="row" alignItems="center" justifyContent="center" spacing="{2}" >
            <Grid item xs={6} sm={6}  >
              <Typography variant='h4'>
                Subscribe to our newsletter
              </Typography>

              <TextField
                label="Email"
                variant="filled"
                value={email}
                onChange={handleEmailChange}
                fullWidth
                style={{
                  backgroundColor: 'white',
                  margin: '10px ',
                  marginRight: '10px'

                }}
                error={!validEmail}
                helperText={!validEmail ? 'Invalid email format ' : ''}
              />
            </Grid>
            <Grid item style={{ marginTop: '40px', marginLeft: '30px' }}>
              <Button variant="contained" color="primary" onClick={handleSubscribe} fullWidth>
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>


      <Container maxwidth="md" maxHeight="md" style={{ marginTop: '50px' }}>
        <Grid container justifyContent="center">
          <Grid item xs={6} sm={2} direction={'column'} spacing={10}>
            <Typography varient='h6' style={{ marginBottom: '20px', color: 'black' }}>Residence</Typography>

            <Typography variant='body2'>
              <Link href="#" underline="hover" style={{ display: 'block', marginBottom: '17px', color: 'black' }}>Canada </Link>
            </Typography>
            <Typography variant='body2'>
              <Link href="#" underline="hover" style={{ display: 'block', marginBottom: '17px', color: 'black' }}>France </Link>
            </Typography>
            <Typography variant='body2'>
              <Link href="#" underline="hover" style={{ display: 'block', marginBottom: '17px', color: 'black' }}>Germany</Link>
            </Typography>
            <Typography variant='body2' >
              <Link href="#" underline="hover" style={{ display: 'block', marginBottom: '17px', color: 'black' }}>Australia</Link>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} direction={'column'} spacing={10}>
            <Typography varient='h6' style={{ marginBottom: '20px', color: 'black' }}>Activities</Typography>
            <Typography variant='body2'>
              <Link href="#" underline="hover" style={{ display: 'block', marginBottom: '17px', color: 'black' }}>Northern Lights</Link>
            </Typography>
            <Typography variant='body2'>
              <Link href="#" underline="hover" style={{ display: 'block', marginBottom: '17px', color: 'black' }}>Sailing</Link>
            </Typography>
            <Typography variant='body2'>
              <Link href="#" underline="hover" style={{ display: 'block', marginBottom: '17px', color: 'black' }}>Multi-activities</Link>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} direction={'column'} spacing={10}>
            <Typography varient='h6' style={{ marginBottom: '20px', color: 'black' }}>Blogs</Typography>
            <Typography variant='body2'>
              <Link href="#" underline="hover" style={{ display: 'block', marginBottom: '17px', color: 'black' }}>Bali Travel Guide</Link>
            </Typography>
            <Typography variant='body2'>
              <Link href="#" underline="hover" style={{ display: 'block', marginBottom: '17px', color: 'black' }}>Srilanka Travel Guide</Link>
            </Typography>
            <Typography variant='body2'>
              <Link href="#" underline="hover" style={{ display: 'block', marginBottom: '17px', color: 'black' }}>Peru Travel Guide</Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} >
            <Typography variant="h6" gutterBottom style={{ color: 'black' }}>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="#000000">
              <img src={facebook} />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="#000000"
              sx={{ pl: 1, pr: 1 }}
            >
              <img src={instagram} />
            </Link>
            <Link href="https://www.twitter.com/" color="#000000">
              <img src={twitter} />
            </Link>
            <Grid style={{ marginLeft: '280px' }}>
              <img src={logo} />
            </Grid>
          </Grid>






        </Grid>
      </Container>


    </footer>
  );
};

export default Foot;