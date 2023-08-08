import {Card,Grid, Box,Container} from "@mui/material";
import React from "react";
import Media from "./Media";
import Content from "./Content";
import FavAndView from "./FavAndView";
import Divider from '@mui/material/Divider';
import NoDataCard from "./Nodata";
// import { Scrollbar } from 'react-scrollbars-custom';


function MainCard({hotelData, showAllHotels}){
    console.log(hotelData)
    // Create a styled scrollbar component using styled-components
    return(
    
    
<>
{showAllHotels ? 
    <Container  sx={{overflowY: "auto", overflowX :'hidden', height : 1400 }}> 
    {hotelData.length >= 1 ? ( <>
    {hotelData.map((hotel)=>(
    <Card  key ={hotel._id} sx={{display: 'flex', margin: 1, height: 299,elevation : 4, width: 878,marginBottom: '50px', borderRadius:'12px',marginTop: '55px'}} >
        <Media imageUrl = {hotel.images[0]} />
        <Grid container rowSpacing={2}>
            <Grid item xs ={12}>
            <Content items = {hotel}/> </Grid>
            <Divider variant = "middle"/>
            <FavAndView  hotelId = {hotel._id}/>
        </Grid>
    </Card>  
    ))}

 </Container> :

<>
    {hotelData.map((hotel)=>(

        <Card  key = {hotel._id} sx={{display: 'flex', margin: 1, height: 299,elevation : 4, width: 850,marginBottom: '50px', borderRadius:'12px',marginTop: '55px'}} >
            <Media imageUrl = {hotel.images[0]} />
            <Grid container rowSpacing={2}>
                <Grid item xs ={12}>
                <Content items = {hotel}/> </Grid>
                <Divider variant = "middle"/>
                <FavAndView hotelId ={hotel._id}/>
            </Grid>
        </Card>  
  

    ))}
    </>
    }
    </>
       

    );
}
export default MainCard;