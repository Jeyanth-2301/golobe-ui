import { Box, Grid ,CardContent,Button, Typography} from "@mui/material";
import CoffeeIcon from '@mui/icons-material/Coffee';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import {React, useState} from "react";
import Divider from '@mui/material/Divider';

function Content({items}){
    console.log(items)
    const [value, setValue] = useState(items.hotelType);

    const hotelRating = Math.round(items.rating)

    return(                  
        <Box sx = {{height: 220}}>
            <CardContent>
                <Grid item sx={{ flex: '1 0 auto',marginLeft: 54}} >                                   
                    <Typography variant = "price">
                        Starting from
                    </Typography>
                    <Typography variant = "subheading">
                        {items.ratePerNight}
                    </Typography>
                    <Typography 
                        sx={{ fontFamily: 'Montserrat',fontSize: '13px',marginLeft: 4.5}}>excl. tax
                    </Typography>                            
                </Grid>         
                <Grid item sx = {{textAlign : 'left',marginTop:-6.5,marginBottom: 2 }}>
                    <Typography variant = "heading">{items.hotelName}</Typography>
                </Grid>
                <Grid container direction="row" alignItems="center">   
                            <Grid item sx={{ textAlign: 'left'}}><LocationOnIcon/></Grid>
                            <Grid item sx={{textAlign:'left',marginBottom: 2,marginTop:1}}>      
                                <Typography variant = "address">
                                   {items.location.address}
                                </Typography>
                            </Grid>   
                             <Grid container direction = "row">  
                                <Grid item sx = {{marginBottom: 3}}>
                                    <Rating sx ={{color: "#FF8682"}}
                                        name="simple-controlled"
                                        value = {hotelRating}
                                        readOnly 
                                         />
                                </Grid>    
                                <Grid item sx = {{flexDirection : 'row',marginTop: 0.3}}>
                                    <Typography variant = "rating">{Math.round(value)} Star Hotel</Typography>         
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