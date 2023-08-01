import React from 'react';
import theme from '../../utils/theme/theme.jsx';
import { ThemeProvider } from '@emotion/react';

import { Button, Card, CardContent, Typography, Grid,CardMedia,CardActionArea,Box} from '@mui/material';
import {useState} from 'react'
import img1 from '/src/assets/Cards/melborne.png'
import img2 from '/src/assets/Cards/Paris.png'
import img3 from '/src/assets/Cards/London.png'
import img4 from '/src/assets/Cards/Colombia.png'
const Cards = () => {
       
  const[imgdata,setData]=useState([]);


  const imageList = [
    {
      id: 1,
      imageUrl: img1,
      title: 'Melborne',
      price: '$200',
      description: 'An Amazing Journey',
    },
    {
      id: 2,
      imageUrl: img2 ,
      title: 'Paris',
      price: '$300',
      description: ' A Paris Adventure',
    },
    {
      id: 3,
      imageUrl: img3 ,
      title: 'London',
      price: '$400',
      description: 'London eye adventure',
    },
    {
      id: 4,
      imageUrl: img4 ,
      title: 'Columbia',
      price: '$450',
      description: 'Amazing streets',
    },

  ];


//   const fetchData = async () =>{
//     try{
//     const url="http://localhost:3100/items";
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     setData(data);
//    }
//    catch(error){
//       console.log("Error:",error);
//    }
//   };



//   useEffect (() => {
//   fetchData();
// },[] )

  return (
    <ThemeProvider theme={theme}>
      
    <Grid container sx={{height: '95vh',width:'90vw' }} >
    <Box 
    sx={{ display: "flex",flexDirection:'column'}}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4n" component="h6" >
            Fall Into Travel!
          </Typography>
        <Button variant='outlined' sx={{color:'black'}} disabledElevation>See all</Button> 
        </Box><Box sx={{width:900}}  >
    <Typography 
    variant="body1" 
    component="h6" 
    sx={{ marginTop: 1 }}>
    Going somewhere to celebrate the season? Whether you're going home or somewhere to roam! We have got the travel tools to get you to your destination 
    </Typography></Box>
    <Grid container direction="row" spacing={1.5} sx={{marginTop:1}}>
      
      {imageList.map((image) => (
        <Grid item key={image.id} sx={{width:'25%'}}>
            <Card
            sx={{
              height:'400px',
              backgroundImage:  `url(${image.imageUrl})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              position: 'relative',
              objectFit:'cover',
              overflow:'hidden',
              borderRadius:'14px',
              width:'290px'}}>


         
            <CardContent >
            < Grid container spacing={7} sx={{marginTop:'80%',color:'white'}} >
            <Grid item xs={8} >
              <Typography gutterBottom variant="h6" component="div" sx={{ whiteSpace: 'nowrap' }}>
                {image.title}
              </Typography>
              <Typography gutterBottom variant="caption" component="div" sx={{ whiteSpace: 'nowrap' }}>
                {image.description}
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{marginTop:'10px',textAlign:'right' }}>
              <Typography variant="h6" sx={{color:theme.palette.background.default}}>
                {image.price}
              </Typography>
            </Grid>
          </Grid>

              <Button
                variant="contained" 
                 diabledElevation disableRipple
                style={{
                  position: 'absolute',
                  bottom: '20px',alignItems:'center',
                 
                   marginLeft:"2%",
                 
                  width:'240px',
                  color:'black',
                  
                  backgroundColor:theme.palette.primary.main
                }}
              >
               < Typography variant="btntext" >Book a hotel</Typography> 
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid></Box></Grid></ThemeProvider>
  );
};

export default Cards
