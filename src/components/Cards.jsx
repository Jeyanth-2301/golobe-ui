import React from 'react';
import theme from '../utils/theme/theme.jsx';
import { ThemeProvider } from '@emotion/react';

import { Button, Card, CardContent, Typography, Grid,CardMedia,CardActionArea,Box} from '@mui/material';
import {useState} from 'react'
import img1 from '../assets/Cards/melborne.png'
import img2 from '../assets/Cards/Paris.png'
import img3 from '../assets/Cards/London.png'
import img4 from '../assets/Cards/Colombia.png'
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
    <Grid container sx={{height: '554px',marginTop:'80px',marginLeft:'104px',marginRight:'104px'}}>
    <Box sx={{ display: "flex",flexDirection:'column'}}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '1000px'  }}>
          <Typography variant="h4n" component="h6" sx={{ marginTop: 2 }}>
            Fall Into Travel!
          </Typography>
          <Button variant="outlined" color="primary" size="small" disableElevation sx={{marginTop:2,color:theme.palette.text.primary}}>See all</Button>
        </Box><Box sx={{width:900}}>
    <Typography variant="subtitle" component="h6" sx={{ marginTop: 2 }}>
    Going somewhere to celebrate the season? Whether you're going home or somewhere to roam! We have got the travel tools to get you to your destination 
    </Typography></Box>
    <Grid container direction="row" spacing={2} sx={{marginTop:'10px',width:'1232px'}}>
      
      {imageList.map((image) => (
        <Grid item key={image.id}>
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
              width:'260px'}}>


         
            <CardContent >
            < Grid container spacing={7} sx={{marginTop:'200px',color:'white'}} >
            <Grid item xs={8} >
              <Typography gutterBottom variant="body" component="div" sx={{ whiteSpace: 'nowrap' }}>
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
                  bottom: '20px',
                  paddingLeft:'20px',
                  marginLeft:"10px",
                  width:'200px',
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
