import React from 'react';
import { Grid, Box, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const App = () => {
    const mainImage = ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/329809711.jpg?k=fc7ce8701795a174ada031af2ebbbcd31e2b9dc552770a3d3067f843972c8f1d&o=&hp=1",
        "https://www.ahstatic.com/photos/9636_sm_02_p_1024x768.jpg",
        "https://libraryhotelcollection.com/_novaimg/4291065-1339161_0_0_6247_3704_500_296.jpg"];
    const renderStars = (star) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <StarOutlinedIcon key={i} fontSize="small" style={{ color: star }} />
            );
        }
        return stars;
    };
    const Components = [1, 2, 3]
    return (

        <div>
            <Box sx={{ display: "flex", flexDirection: 'column', overflow: 'auto', marginLeft: '4.7%', marginTop: '20vh', marginBottom: '25vh' }}>
                <Typography variant='h4'> Favourites</Typography><br />
                {Components.map((feature, index) => (
                    <Paper elevation={5} spacing={2} sx={{ width: '90vw', marginBottom: '6vh' }}>
                        <Grid container spacing={0} style={{ width: '90vw', height: "44vh" }}>
                            <Grid item xs={12} md={4} style={{ height: '44vh', objectFit: 'cover', overflow: 'hidden' }}>
                                <img src={mainImage[index]} alt="Main" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box sx={{ height: '28vh', marginLeft: '1vw', marginTop: '3vh', marginRight: '1vw' }}>
                                    <Grid item sx={{ marginLeft: '49vw', marginRight: '0.5vw' }} >
                                        <Typography variant='price'> Starting from</Typography>
                                        <Typography variant="subheading">
                                            <subheader> $10478</subheader>
                                            <Typography variant="caption" style={{ display: 'inline', marginTop: '2vh' }}><b>/night</b>
                                            </Typography></Typography>
                                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '13px', marginLeft: 4.5 }}>excl. tax</Typography>
                                    </Grid>
                                    <Grid item sx={{ textAlign: 'left', marginTop: -6.5, marginBottom: 2 }}>
                                        <Typography variant="heading">CVK Park Bosphorus Hotel Istanbul</Typography>
                                    </Grid>
                                    <Grid container direction="row" alignItems="center">
                                        <Grid item sx={{ textAlign: 'left' }}><LocationOnIcon /></Grid>
                                        <Grid item sx={{ textAlign: 'left', marginBottom: 2 }}>
                                            <Typography variant="address">
                                                Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                                            </Typography>
                                        </Grid>
                                        <Grid container direction="row">
                                            <Grid item sx={{ marginBottom: 3 }}> </Grid>
                                            <Grid item sx={{ flexDirection: 'row', marginTop: 0.3 }}>
                                                <Typography variant="rating"> {renderStars('#FF8682')} Star Hotel</Typography>
                                            </Grid>
                                            <Grid item sx={{ textAlign: 'left', marginLeft: 10, fontSize: 14 }}>
                                                <FreeBreakfastIcon size="small" />
                                                <Grid sx={{ marginLeft: 4, marginTop: -3 }}>
                                                    <Typography variant="amenities">20+Aminities</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Button variant="outlined" sx={{ marginTop: '6px', height: '30px', color: "#112211" }}> 4.2</Button>
                                        <Grid item sx={{ marginTop: '6px', width: '9vw', pl: 1 }}><b>Very Good  </b> </Grid>
                                        <Grid item sx={{ marginTop: '6px', width: '12vw', pl: 1 }}>70 Reviews</Grid>
                                    </Grid>
                                </Box>
                                <hr style={{ width: '57.9vw', marginTop: "1vh", marginLeft: '1vw', border: '0.1px solid #ccc' }} />
                                <Box m={1} display="flex" justifyContent="space-between" sx={{ marginLeft: '1vw', marginTop: '3vh', marginRight: '1vw' }}>
                                    <Button variant='outlined' sx={{ color: "#112211" }}>
                                        <FavoriteOutlinedIcon style={{ color: "black", fontSize: 24 }} /></Button>
                                    <Link to='/hotel-details' >
                                        <Button size="large" variant="outlined" sx={{ width: '50vw', height: '38px', backgroundColor: '#8DD3BB', '&:hover': { backgroundColor: '#8DD3BB' } }}  >
                                            <Typography variant="rating" color={'#112211'} sx={{ cursor: 'pointer' }} > View Place</Typography>
                                        </Button>
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </Box>

        </div>
    );
};

export default App;