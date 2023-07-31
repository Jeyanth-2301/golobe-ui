import React from 'react';
import { Grid, Paper, Typography} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Overviewsection = () => {
  const review="Very Good";
  const totalreview="750"
 const components=['Near park','Near Nightlife','Near Hospital'];
  return (
    <div>
      
    <Grid container  style={{ height: '338px',width:'1232px',marginLeft:'104px' ,marginRight:'104px' ,marginTop:'934px',marginBottom:'104px'}}>
     <Grid item xs={12} style={{ height: '161px',width:'1232px',overflow: 'hidden' }}  >
          <Typography variant="element1">Overview</Typography><br/>
          <Typography variant="element2">Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.</Typography>
     </Grid>
     
    <Grid container  style={{height:'145px',width:'1232px' }} >
           
              <Paper style={{ height: '145px',width:'166px',overflow: 'hidden', backgroundColor:'#8DD3BB' ,border: '0.5px  #000', borderRadius: '12px' }}>
                 <Paper elevation={0} style={{ height: '113px',width:'96px',marginLeft:'16px',backgroundColor:'#8DD3BB',marginTop:'16px',marginBottom:'16px' }}>
                    <Typography variant='element3' >4.2</Typography><br/><br/>
                    <Typography variant='element4'  >{review}</Typography><br/>
                    <Typography variant='element5'>{totalreview} Reviews</Typography>
                 </Paper>
              </Paper>
      {components.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
           <div>
              <Paper style={{ height: '145px',width:'160px',overflow: 'hidden',marginLeft:'40px',border: '2px solid #8DD3BB',borderRadius: '12px'}} >
                <AutoAwesomeIcon style={{ fontSize:40 ,marginLeft:'10px' ,marginTop:'10px'}}/><br/><br/><br/>
                <Typography variant='element6' >{feature}</Typography>
              </Paper>
          </div>
          
        </Grid>
      ))}
    </Grid>
    </Grid>
    
    </div>
  );
};

export default Overviewsection;