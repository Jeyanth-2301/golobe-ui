import {Card,Grid, Box,Container} from "@mui/material";
import React from "react";
import Media from "./Media";
import Content from "./Content";
import FavAndView from "./FavAndView";
import Divider from '@mui/material/Divider';
// import { Scrollbar } from 'react-scrollbars-custom';
import DataNotFound from './NoResult';


function MainCard({hotelData, showAllHotels,In,out,room}){
    
    if (!Array.isArray(hotelData)) {
        return <DataNotFound />;
      }
// function MainCard({hotelData, showAllHotels ,In,out}){
//     console.log(hotelData)
//     console.log(In)
    // Create a styled scrollbar component using styled-components
    return(

        
    
    
<>
{showAllHotels ? 
    <Container  sx={{overflowY: "auto", overflowX :'hidden', height :1400 }}> 
    {hotelData.map((hotel)=>(
    <Card  key ={hotel._id} sx={{display: 'flex', margin: 1, height: 299,elevation : 4, width: 890,marginBottom: '50px', borderRadius:'12px',marginTop: '55px', marginLeft:'-20px'}} >
        <Media imageUrl = {hotel.images[0]} />
        <Grid container rowSpacing={2}>
            <Grid item xs ={12}>
            <Content items = {hotel}/> </Grid>
            <Divider variant = "middle"/>
            <FavAndView  hotelId = {hotel._id} In={In} out={out} room={room}/>
        </Grid>
    </Card>  
    ))}

 </Container> :
<>
  <Container sx ={{height: 1400}}> 
    {hotelData.map((hotel)=>(

        <Card  key = {hotel._id} sx={{display: 'flex', margin: 1, height: 299,elevation : 4, width: 890,marginBottom: '50px', borderRadius:'12px',marginTop: '55px', marginLeft:'-20px'}} >
            <Media imageUrl = {hotel.images[0]} />
            <Grid container rowSpacing={2}>
                <Grid item xs ={12}>
                <Content items = {hotel}/> </Grid>
                <Divider variant = "middle"/>
                <FavAndView hotelId ={hotel._id} In={In} out={out} room={room}/>
            </Grid>
        </Card>  
  

    ))}
    </Container>
    </>
    }
    </>
       

    );
}
export default MainCard;