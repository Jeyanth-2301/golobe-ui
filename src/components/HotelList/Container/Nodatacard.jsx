import React from 'react'; 
import { Card, CardContent, Typography, Box } from '@mui/material'; 
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'; 
const NoDataCard = () => 
{ return ( <Card sx={{ position: 'absolute', bottom: '10%', left: '40%' }}> 
<CardContent sx={{ textAlign: 'center', padding: '24px' }}> 
<Box sx={{ marginBottom: '16px' }}> <SentimentVeryDissatisfiedIcon fontSize="large" color="error" /> 
</Box> <Typography variant="body1" color="rgba(0,0,0,1)"> 
        Sorry, No hotels found with the provided search term and filters. 
</Typography> </CardContent> </Card> ); };
 export default NoDataCard;