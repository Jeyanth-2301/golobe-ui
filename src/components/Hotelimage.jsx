import React from 'react'
import { Grid,Button } from '@mui/material'





const Hotelimage = () => {
  const mainImage = "https://lh3.googleusercontent.com/p/AF1QipO3gdTB8VLgakEysQHz6PaSFEBrdCpggfmrUkSJ=w480-h360-n-k-rw-no-v1 "
  const otherImages = ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/329809708.jpg?k=a55763fe64b945742940ebe94bcd1981d3217dfec055c0239235cd5f1c6b12e7&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/329809711.jpg?k=fc7ce8701795a174ada031af2ebbbcd31e2b9dc552770a3d3067f843972c8f1d&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/329809726.jpg?k=d5aad9d59ec9012b9910af92672f770b1bdea2ccde23e5515c2f2fa1add64a85&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/329809727.jpg?k=d0aa4dc6969d68866e3daefb7d0fb7f6cbfd8ca45270f60fc5a504eb4408e510&o=&hp=1"]
  return (
 <div>
    <Grid container spacing={0.5} sx={{height:'100vh',width:'90vw',marginTop:'32px',alignItems: 'stretch',justifyContent: 'flex-start'}}>
       <Grid item xs={6} sx={{height: '99.75%', overflow: 'hidden'}}>
         <img src={mainImage} alt="Main" style={{ width: '100%', height: '99.7%',objectFit:'cover',margin: 0, padding: 0 ,marginLeft:'-3px',marginRight: '-4px'}} />
       </Grid>
       <Grid item xs={6}>
         <Grid container spacing={0.5} sx={{height: '100%', display: 'flex', flexWrap: 'wrap',alignItems: 'stretch'}}>
             {otherImages.map((image, index) => (
             <Grid key={index} item xs={6} sx={{width: '50%', height: '50%', position: 'relative' }}>
                <img src={image} alt={`Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {index === otherImages.length - 1 && (
                   <Button variant="contained" color="primary" style={{ position:'absolute',bottom:'16px',backgroundColor:'#8DD3BB',right: '16px' ,
                  borderRadius:'4px',color:'#112211',border:'1px solid black','&:hover': {
                    backgroundColor: '#8DD3BB'
                  }, }} >View all photos</Button>
                )}
            </Grid>
                 ))}
           </Grid>
      </Grid>
  </Grid>
    </div>
  )
}

export default Hotelimage