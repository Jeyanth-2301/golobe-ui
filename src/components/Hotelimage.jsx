import React from 'react'
import { Grid,Button } from '@mui/material'
import img1 from '../assets/Rectangle 3.png'
import img2 from '../assets/Rectangle 5.png'
import img3 from '../assets/Rectangle 6.png'
import img4 from '../assets/Rectangle 7.png'
import img5 from '../assets/Rectangle 8.png'



const Hotelimage = () => {
  const mainImage = img1
  const otherImages = [img2,img3,img4,img5]
  return (
 <div>
    <Grid container spacing={1} sx={{height:'550px',width:'1245px',marginTop:'32px',marginLeft:'90px',marginRight:'104px'}}>
       <Grid item xs={6} sx={{width:'615px',height:'546px'}}>
         <img src={mainImage} alt="Main" style={{ width: '100%', height: '100%',borderRadius:'4px' }} />
       </Grid>
       <Grid item xs={6}>
         <Grid container spacing={1} sx={{width:'612px',height:'550px'}}>
             {otherImages.map((image, index) => (
             <Grid key={index} item xs={6} sx={{width:'302px',height:'271px', position: 'relative' }}>
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