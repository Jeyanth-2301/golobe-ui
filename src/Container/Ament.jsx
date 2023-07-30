import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { useDropdown } from '../Container/Usedropdown';
import expand from '../assets/icons/drop-icons/expand.svg';
import { Button } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../utils/theme/theme.jsx';

export default function Ament(){

      const { isExpanded, toggleDropdown } = useDropdown();
      const FormStyle = styled(FormControlLabel)({
            marginTop:-2,
            '& .MuiFormControlLabel-label': { fontSize: '16px' , color: theme.palette.text.primary},
            '& .MuiSvgIcon-root': { fontSize: 30 ,color: theme.palette.text.primary} , })
      const TextButton= styled(Button)(({theme}) =>({
            color: theme.palette.text.secondary,
            fontSize:20
      }))
     return(
      <ThemeProvider theme={theme}>
            <Box sx={{ my: 3, mx: 2 }}>
                  <Grid container alignItems="center" >
                         <Grid item xs={10} sx={{marginTop:2}}>
                              <Typography gutterBottom variant="h13" component="div" > Amenties </Typography>
                        </Grid>
                        <Grid item ><img src ={expand}  alt=" " onClick={toggleDropdown} /></Grid>
                        </Grid>
                        
                                {isExpanded && (
                                    <FormGroup  sx={{marginTop:1.5}} >
                                       <FormStyle control={ <Checkbox  /> } label={<Typography variant="check">24-hrs front desk</Typography>}> </FormStyle>
                                          <FormStyle control={ <Checkbox  /> } label={<Typography variant="check">Air-conditioned</Typography>}></FormStyle>
                                          <FormStyle control={ <Checkbox  /> } label={<Typography variant="check">Fitness</Typography>}></FormStyle>
                                          <FormStyle control={ <Checkbox  /> } label={<Typography variant="check">Pool</Typography>}></FormStyle>
                                    </FormGroup>   )}
                                    <Box  sx={{  ml: -1, mb: 1 }}>
                                          <TextButton >+24 more</TextButton>
                                     </Box>    
                               </Box> 
                                </ThemeProvider>
            );}
