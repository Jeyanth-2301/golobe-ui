import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React,{useState, useRef} from 'react';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDropdown } from '../Container/Usedropdown';
import expand from '../assets/icons/drop-icons/expand.svg';
import round from '../assets/icons/drop-icons/round.svg';
import { ThemeProvider } from '@emotion/react';
import theme from '../utils/theme/theme.jsx';


export default function Price({ value,changePrice}){
  const { isExpanded, toggleDropdown } = useDropdown();
  const sliderRef = useRef(null);

      const PrettoSlider = styled(Slider)(({theme}) =>(({     
         color:  theme.palette.text.primary,
         marginLeft:'4px',
        '& .MuiSlider-thumb': {
            height: 5,
            width: 5,
            backgroundColor: theme.palette.primary.main,
            border: '2px solid theme.palette.primary.main',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',},
        '&:before': {
              display: 'none',
          },
        
  },  })))

  const [dragging, setDragging] = useState('');

  const handleMouseDown = (e, position) => {
      e.preventDefault();
      setDragging(position);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

  const handleMouseMove = (e) => {
      if (!dragging) return;
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const newPosition = (e.clientX - sliderRect.left) / sliderRect.width;
      const newValue = position === 'left' ? Math.max(newPosition * 1150, 50) : Math.min(newPosition * 1150, 1200);
      changePrice(position === 'left' ? [newValue, value[1]] : [value[0], newValue]);
    };

  const handleMouseUp = () => {
      setDragging('');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
     
       
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
                    <Grid item sx={{marginTop : 3,}} ><img src ={expand}  alt=" " onClick={toggleDropdown} /> </Grid>
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
                <div  style ={{display:'flex'}}>
                    <div style ={{marginTop:-31,
                          position: 'absolute',
                          marginRight:-3,
                          marginLeft: (value[0] - 50) / 1150 * 278-9,
                          zIndex: dragging === 'left' ? 1 : 0,}}   >
                          <img   src={round} onMouseDown={(e) => handleMouseDown(e, 'left')}  />  </div> 
                    <div style ={{marginTop:-31,
                          position: 'absolute',
                          width:5,
                          height:5,
                          marginLeft: (value[1] - 50) / 1150 * 278-22,
                          zIndex: dragging === 'left' ? 1 : 0,}} > 
                          <img src={round}  onMouseDown={() => handleMouseDown('right')} /> </div>
                </div> 
                <div  style ={{display: 'flex'}}>
                    <Typography gutterBottom variant='val'  sx={{marginLeft:-0.5, marginTop:1, marginBottom:1.5}} > ${value[0]} </Typography>
                    <Typography   variant='val'  sx={{marginLeft:27,marginTop:1, marginBottom:1.5}}> ${value[1]} </Typography>
                </div>
              </div> )}
              </Typography>
            </Box></ThemeProvider>
); }