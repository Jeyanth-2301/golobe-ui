import * as React from 'react';
import {useState} from  'react';
import drop from '../../../assets/icons/drop-icons/drop.svg';
import { Box, Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import UserDropdown from './sort-dropdown';

import theme from '../../../utils/theme/theme.jsx';
export default function BasicButtons({items}) {
  const [showIndicator, setShowIndicator] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Recommended');
    const [loggedIn, setLoggedIn] = useState(false); 
    const [anchorEl, setAnchorEl] = useState(null);
  
  
    const handleUserNameClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

  
    const handleDropdownClose = () => {
        setAnchorEl(null);
    };
    const handleOptionSelect =(option)=>{
setSelectedOption(option)
setAnchorEl(null)
    };
    const handleLogoClick = () => {
        setShowIndicator(!showIndicator);
    };
  return (
   
   <ThemeProvider theme={theme}>
     <>
     <Box sx={{display:'flex',justifyContent:'space-between',marginTop:'25px',marginBottom: '10px'}}>
          <Box sx={{display:'flex',gap:'5%'}}>
              <Typography sx = {{fontSize : '14px', whiteSpace: 'nowrap'}}><b>showing 4 of </b></Typography> 
              <h5 style ={{color: theme.palette.text.secondary, whiteSpace: 'nowrap'}}>{items.length} places </h5>
          </Box>
          <div  style ={{whiteSpace: 'nowrap', display:'flex',marginRight: '55px', marginRight:'-3px'}}>
          <Typography sx = {{fontSize: '14px', marginLeft:'20px'}}>Sort by <b>{selectedOption}</b> </Typography>
          <div>
            <img src ={ drop}  sx ={{marginLeft:'10px'}} onClick={handleUserNameClick} style={{ cursor: 'pointer' }} />
       

       <UserDropdown
          anchorEl={anchorEl}
          onClose={handleDropdownClose}
          // onOptionClick={handleOptionSelect}
          setSelectedOption ={setSelectedOption}
          onLogout={() => {
          handleDropdownClose(); 
    
          setLoggedIn(false);
          } }/>
   
    </div>
    </div>
     </Box>
   </>
  </ThemeProvider>
 

);
}
