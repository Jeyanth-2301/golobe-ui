import { Box, Grid ,CardContent,Button, Typography} from "@mui/material";
import CoffeeIcon from '@mui/icons-material/Coffee';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import {React, useState} from "react";
import Divider from '@mui/material/Divider';

function Content({items}){
    console.log(items)
    const address = items.location.address.lastIndexOf(",", items.location.address.lastIndexOf(",") - 1);
    const addLine1 = items.location.address.slice(0, address).trim();
    const addLine2 = items.location.address.slice(address + 1).trim();


    const hotelRating = Math.round(items.rating)

    return(                  
        <Box sx = {{height: 220}}>
            <CardContent>
                <Grid item sx={{ flex: '1 0 auto',marginLeft: 51.5}} > 
                    <Grid item sx = {{marginLeft: '23px'}}>
                    <Typography variant = "price" component="span">
                        Starting from
                    </Typography></Grid>                                  
                    <Grid item sx ={{marginLeft: '23px'}}>
                    <Typography variant = "nightprice">
                        ${items.ratePerNight}
        
                    </Typography>
                
                    <Typography variant = "night" sx={{ marginLeft: '3px', marginTop: '2px' }}>
                            /night
                        </Typography>
                    </Grid>
                    
                    <Typography
                        sx={{ fontFamily: 'Montserrat', fontSize: '13px', marginLeft: '60px', marginTop: '2px' }}>
                        excl. tax
                    </Typography>                           
                </Grid>    

                <Grid item sx = {{textAlign : 'left',marginTop:-6.5,marginBottom: 3.9 }}>
                    <Typography variant = "heading">{items.hotelName}</Typography>
                </Grid>
                <Grid container direction="row" alignItems="center">   
                <Grid item sx={{ textAlign: 'left', display: 'flex', alignItems: 'center',marginBottom:1.5 }}>
                            <Grid item sx = {{marginTop: -0.125}}>
                            <LocationOnIcon /></Grid>
                            <div style={{ marginLeft: 2, display: "flex", flexDirection: "column" }}>
                                <Typography variant="address">
                                    {items.location.address}
                                </Typography>
                                {/* <Typography variant="address">
                                    {addLine2}
                                </Typography> */}
                            </div>
                        </Grid> 
                             <Grid container direction = "row">  
                                <Grid item sx = {{marginBottom: 1.5}}>
                                    <Rating sx ={{color: "#FF8682"}}
                                        name="simple-controlled"
                                        value = {hotelStarRating}
                                        readOnly 
                                         />
                                </Grid>    
                                <Grid item sx = {{flexDirection : 'row',marginTop: 0.3}}>
                                    <Typography variant = "price">{items.hotelType} Star Hotel</Typography>         
                                </Grid>
                                <Grid item sx = {{textAlign :  'left',marginLeft: 10,fontSize: 14}}>
                                    <CoffeeIcon size = "small"/>
                                    <Grid sx = {{marginLeft: 4,marginTop: -3}}>
                                          <Typography variant = "amenities">{items.amenities.length}+Aminities</Typography>
                                    </Grid> 
                                </Grid>  
                            </Grid>  
                            <Button variant="outlined" sx = {{marginTop: -1,height:'40px',color: "#112211"}}>{items.rating}</Button>
                            <Grid item sx ={{marginTop: -1,pl:1}}><b>{items.overallReview}</b> {items.numReviews}     reviews</Grid>       
                                
                <Divider variant="middle" /> 
                </Grid>
            </CardContent>
        </Box>
    );
}
export default Content;