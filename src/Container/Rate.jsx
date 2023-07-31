import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import expand from '../assets/icons/drop-icons/expand.svg';
import { useDropdown } from '../Container/Usedropdown'; 
import { ThemeProvider } from '@emotion/react';
import theme from '../utils/theme/theme.jsx';


export default function Rate({value,selectRating}){
  const { isExpanded, toggleDropdown } = useDropdown();
    const ButtonStyle = styled(Box) (({theme})=> ({
            width: 40,
            height:40,
            borderRadius: 5,
            border: '2px solid' ,
            borderColor :theme.palette.primary.main  ,
            padding:'0.5rem ',
            textAlign: "center",
            margin :'0.3rem 0.9rem 1.25rem  0.0rem',
            color:theme.palette.text.primary
      }));
      const handleBoxClick = (value) => {
        console.log(`Box with value ${value} was clicked!`);
      };
      const handleBoxMouseEnter = (e) => {
        e.target.style.backgroundColor = '#d9d9d9';
        e.target.style.cursor = 'pointer';
      };

      const handleBoxMouseLeave = (e) => {
        e.target.style.backgroundColor = 'white';
      };
return(
      <ThemeProvider theme={theme}>
    <Box sx={{ my: 3, mx: 2}}>
        <Grid container alignItems="center" sx={{marginBottom:2.3}} >
            <Grid item xs={10} sx={{marginTop:1}}>
                <Typography gutterBottom variant="h13" >Rating  </Typography>
            </Grid>
              <Grid item sx={{marginTop:1}} >
              <img src ={expand}  alt=" " onClick={toggleDropdown} /> </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
              {isExpanded && (
             
                  <div style ={{display:"flex"}}>
                      <ButtonStyle   value ={value} 
                            onClick={() => handleBoxClick(value)}
                            onMouseEnter={handleBoxMouseEnter}
                            onMouseLeave={handleBoxMouseLeave}  > <Typography variant ="val">0+</Typography> 
                      </ButtonStyle>
                      <ButtonStyle   value ={value}
                            onClick={() => handleBoxClick(value)}
                            onMouseEnter={handleBoxMouseEnter}
                            onMouseLeave={handleBoxMouseLeave} ><Typography variant ="val">1+</Typography>
                      </ButtonStyle>
                      <ButtonStyle   value ={value} 
                            onClick={() => handleBoxClick(value)}
                            onMouseEnter={handleBoxMouseEnter}
                            onMouseLeave={handleBoxMouseLeave}><Typography variant ="val">2+</Typography>
                      </ButtonStyle>
                      <ButtonStyle  value ={value}
                            onClick={() => handleBoxClick(value)}
                            onMouseEnter={handleBoxMouseEnter}
                            onMouseLeave={handleBoxMouseLeave}><Typography variant ="val">3+</Typography>
                      </ButtonStyle>
                      <ButtonStyle value ={value}
                            onClick={() => handleBoxClick(value)}
                            onMouseEnter={handleBoxMouseEnter}
                            onMouseLeave={handleBoxMouseLeave}><Typography variant ="val">4+</Typography>
                      </ButtonStyle>
                </div > )}
      </Typography>
    </Box> </ThemeProvider>
);
}