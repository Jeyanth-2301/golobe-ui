import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { useDropdown } from './Usedropdown';
import expand from '../../../assets/icons/drop-icons/expand.svg';

import { Button, IconButton } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../utils/theme/theme.jsx';
import { useState } from 'react';

export default function Ament(){

      const { isExpanded, toggleDropdown } = useDropdown();
      const FormStyle = styled(FormControlLabel)({
            marginTop:-2,
            '& .MuiFormControlLabel-label': { color: theme.palette.text.primary},
            '& .MuiSvgIcon-root': { fontSize: 30 ,color: theme.palette.text.primary} , })
      const TextButton= styled(Button)(({theme}) =>({
            color: theme.palette.text.secondary,
            fontSize:20
      }))
      const [showCheckboxes, setShowCheckboxes] = useState(false);
      const handleTextButtonClick = () => {
                  setShowCheckboxes(!showCheckboxes);  }
 
      const iconStyle = {
            cursor: 'pointer',
            // Add hover effect styles
            backgroundColor: isExpanded ?  'transparent' :  '#f0f0f0',}
  
return(
      <ThemeProvider theme={theme}>
            <Box sx={{ my: 4, mx: 2 }}>
                  <Grid container alignItems="center"  sx={{marginTop:5}}>
                        <Grid item xs={10} >
                              <Typography gutterBottom variant="h13" component="div" > Amenties </Typography>
                        </Grid>
                        <Grid item  ><IconButton><img src ={expand}  alt=" " onClick={toggleDropdown} style={iconStyle}    /> </IconButton></Grid>
                        </Grid>
                              {isExpanded && (
                                    <FormGroup  sx={{marginTop:1.5}} >
                                       <FormStyle control={ <Checkbox  /> } label={<Typography variant="check">24-hrs front desk</Typography>}> </FormStyle>
                                          <FormStyle control={ <Checkbox  /> } label={<Typography variant="check">Air-conditioned</Typography>}></FormStyle>
                                          <FormStyle control={ <Checkbox  /> } label={<Typography variant="check">Fitness</Typography>}></FormStyle>
                                          <FormStyle control={ <Checkbox  /> } label={<Typography variant="check">Pool</Typography>}></FormStyle>
                                    </FormGroup>   )}
                         <div>
                        <Box sx={{ ml: -1, mb: 1 }}>
                    {!showCheckboxes  &&  (
                     <TextButton onClick={handleTextButtonClick} >+7 more</TextButton>  
                      )} 
                        </Box>

      
             {showCheckboxes && isExpanded && (
             <div>
      
            <FormGroup  sx={{marginTop:1.5}} >
            <FormStyle control={ <Checkbox  /> } label={<Typography variant="check">Free Wi-Fi</Typography>}> </FormStyle>
               <FormStyle control={ <Checkbox  /> } label={<Typography variant="check">Room service</Typography>}></FormStyle>
               <FormStyle control={ <Checkbox  /> } label={<Typography variant="check">Airport Shuttle</Typography>}></FormStyle>
               <FormStyle control={ <Checkbox  /> } label={<Typography variant="check">Spa and wellness</Typography>}></FormStyle>
               <FormStyle control={ <Checkbox  /> } label={<Typography variant="check">Non-smoking rooms</Typography>}> </FormStyle>
               <FormStyle control={ <Checkbox  /> } label={<Typography variant="check">Good breakfast</Typography>}></FormStyle>
               <FormStyle control={ <Checkbox  /> } label={<Typography variant="check">Free parking</Typography>}></FormStyle>
              
            </FormGroup>  

            </div> )}
             </div>   
             </Box> 
      </ThemeProvider>
 );}
