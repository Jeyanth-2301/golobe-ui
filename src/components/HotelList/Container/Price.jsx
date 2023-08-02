import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React,{useState, useRef} from 'react';
import Slider from '@mui/material/Slider';
import { IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDropdown } from './Usedropdown';
import expand from '../../../assets/icons/drop-icons/expand.svg';

import { ThemeProvider } from '@emotion/react';
import theme from '../../../utils/theme/theme.jsx';


export default function Price({ value,changePrice}){
  const { isExpanded, toggleDropdown } = useDropdown();
  const [isClicked, setClicked] = useState(false);
  const sliderRef = useRef(null);

  const PrettoSlider = styled(Slider)(({theme}) =>(({     
         color:  theme.palette.text.primary,
         marginLeft:'4px',
        '& .MuiSlider-thumb': {
            height: 23,
            width: 23,
            backgroundColor: theme.palette.primary.main,
            border: '2px solid theme.palette.primary.main',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',},
        '&:before': {
              display: 'none',
          },
        
  },  })))

  const [dragging, setDragging] = useState('');

  const iconStyle = {
    cursor: 'pointer',
    // Add hover effect styles
    backgroundColor: isExpanded ?  'transparent' :  '#f0f0f0',}
    return(
      <ThemeProvider theme={theme}>
            <Box sx={{ my: 3, mx: 2 }}>
                <Grid container alignItems="center"  >
                    <Grid item xs={12}  >
                        <Typography gutterBottom variant="fil" component="div"   >Filters</Typography>
                    </Grid>
                    <Grid item xs={10} sx={{marginTop : 3}}>
                        <Typography  gutterBottom variant="h13" component="div" > Price </Typography>
                    </Grid>
                    <Grid item sx={{marginTop : 3,}} >
                       <IconButton> <img src ={expand}  alt=" " onClick={toggleDropdown}  style ={iconStyle}/> </IconButton>
                    </Grid>
                 </Grid>
              <Typography variant="body2" sx={{width:270, marginLeft:0.5, marginTop:1.3 }}>
              {isExpanded && (
              <div>
                <PrettoSlider
                size='small'
                value={value}
                onChange={changePrice}
                defaultValue={50}  min={50} max={1200}  
                ref={sliderRef}/>
               
                <div  style ={{display: 'flex'}}>
                    <Typography gutterBottom variant='val'  sx={{marginLeft:-0.5, marginTop:1, marginBottom:1.5}} > ${value[0]} </Typography>
                    <Typography   variant='val'  sx={{marginLeft:27,marginTop:1, marginBottom:1.5}}> ${value[1]} </Typography>
                </div>
              </div> )}
              </Typography>
            </Box>
        </ThemeProvider>
); }