import React from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import Building from '../../assets/icons/Payment-icons/building.svg';
import Time from '../../assets/icons/Payment-icons/time.svg'
import Room from '../../assets/icons/Payment-icons/room.svg'


const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};



const Booking = ({ bookingDetails }) => {
    const boxStyle = {
        display: 'flex',
        width: '100%',
        maxWidth: '76.9375rem',
        maxHeight: '19.3rem',
        alignItems: 'center',
        marginTop: '1rem',


    };

    const defaultBookingDetails = {
        name: '',
        email: '',
        checkInDate: '',
        checkOutDate: '',
        roomType: '',
    };

    if (!bookingDetails) {
        return null;
    }

    const { name, checkInDate, checkOutDate, roomType, checkInTime, checkOutTime, roomNumber } = bookingDetails || defaultBookingDetails;

    return (
        <Box style={boxStyle}>
            <Box
                style={{
                    display: 'flex',
                    width: '13.4rem',
                    height: '16.3rem',
                    padding: '1.5rem',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    alignSelf: 'stretch',
                    backgroundColor: '#EBF6F2',
                    borderStartStartRadius: '16px',
                    borderEndStartRadius: '16px',

                }}
            >
                <Grid container direction='column' spacing={3}>

                    <Grid item>
                        <Typography variant="h6">
                            <b>{formatDate(checkInDate)}</b>
                        </Typography>
                        <Typography variant="caption" >
                            Check-in
                        </Typography>
                    </Grid>

                    <Grid item >
                        <img src={Building} />
                    </Grid>

                    <Grid item>
                        <Typography variant="h6" >
                            <b>{formatDate(checkOutDate)}</b>
                        </Typography>
                        <Typography variant="caption">Check-out</Typography>
                    </Grid>

                </Grid>
            </Box>

            <Box style={{ width: '38.1rem', height: '16.3rem', marginBottom: 16, flexDirection: 'column', borderEndEndRadius: '16px' }}>
                <Grid container
                    alignItems="center"
                    style={{
                        padding: '1.0rem',
                        backgroundColor: '#8DD3BB',
                        borderStartEndRadius: '16px',
                    }}
                >
                    <Avatar sx={{width:'3rem', height:'3rem'}} src='https://s3-alpha-sig.figma.com/img/de42/3158/13dc5b2e20dc60002c5ebc10bec549e3?Expires=1691971200&Signature=ZHzAq5Bk5EtbGxurRfqS~zdOjE-gM~MqPhIhiy4~0oZeKBZuXxWQ5wO7oSi~GlRdCULMNOa3~PbJVxvkGF4uWBht40SUWPLZBpZGSdDV-BPFdE-Dm-isnLYdlFQDoRT~3w-ZAlKnAwkI6P93dDJiQhap2ud5nDX5utE5xFfx9Rn03Pub8acxrz7Tvc0kUjTdMzQujBNeSQ6xIMQzfd~bNipy04UMDozckMvKQg4GWJUWWXOYL6WSPubSADq0jvNXSEh5uYDCeXacb0cYslL1LtgbLPScjtJ2Cjyql~0hHZS2YBG4d6fly77Fit~d7k~zouNqX-G4CvfhN4PFkA8h-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt="image" />
                    <Typography variant="body1" style={{ marginLeft: '1rem' }}>
                        <b>{name}</b>
                    </Typography>

                    <Grid item xs={true} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Typography variant="body2"><b>{roomType}</b></Typography>
                    </Grid>

                </Grid>

                <Grid container direction="row" spacing={1} style={{ padding: '1.5rem' }}>

                    <Grid item sx={{ marginTop: 1 }}>
                        <img src={Time} />
                    </Grid>

                    <Grid item style={{ marginRight: 25 }}>
                        <Typography variant="caption">check-in time
                        </Typography>

                        <Typography variant="body2" >
                            <b>{checkInTime}</b>
                        </Typography>
                    </Grid>

                    <Grid item sx={{ marginTop: 1 }}>
                        <img src={Time} />
                    </Grid>

                    <Grid item style={{ marginRight: 30 }}>
                        <Typography variant="caption">check-out time
                        </Typography>

                        <Typography variant="body2" >
                            <b>{checkOutTime}</b>
                        </Typography>
                    </Grid>

                    <Grid item sx={{ marginTop: 1 }}>
                        <img src={Room} />
                    </Grid>

                    <Grid item>
                        <Typography variant="caption">room no
                        </Typography>

                        <Typography variant="body2" >
                            <b>{roomNumber}</b>
                        </Typography>
                    </Grid>

                </Grid>

            </Box>
            <Box style={{ border: '1px solid #EAEAEA', width: '23rem', height: '16.3rem', marginBottom: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
                <Box style={{ width: '10.5rem' }}>
                    <img style={{width:'10.625rem',height:'10.625rem'}} src='https://s3-alpha-sig.figma.com/img/a8f8/a3bd/0fbb63b80b094364944041f8aa0cad46?Expires=1691971200&Signature=WY~42XaIAYkATC9RuIRqxivjxU0hBAAMVG70ai3YugMW638ysWkQDGxYy4~os0BUPvMYF~Ykb6UFxWZoXd3E8iT2WB13FRTtTqTLxHp4a2wLYld6TcVj2o2PHzsw~i9Xtg5E4cs-H5NZT8sFkZF3c10eKS0-Wo8Q7VcfqdycQ8xmSLE4F1bCNU2u~hX7i3pE8H~ZkJ8jpfKB3l3ovLrYAMOnpSNiaylyEq1SDQtUJhiyMy6A49HXfSEy9jxdLTiWWstpYXnbOPGrynNoo7VanqTYc~7vgBhF1Q1zVR1Fc~c4BoDWdTBL~ts5K0glQP3HHznwJ1gsRAEVP8YwsDpdRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                </Box>
            </Box>
        </Box>
    );
};

export default Booking;