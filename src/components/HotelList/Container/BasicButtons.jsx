import * as React from 'react';
import Stack from '@mui/material/Stack';
import {useState} from  'react';
import drop from '../../../assets/icons/drop-icons/drop.svg';
import { Box, Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import UserDropdown from './sort-dropdown';

import theme from '../../../utils/theme/theme.jsx';
export default function BasicButtons() {
  const [showIndicator, setShowIndicator] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false); 
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState('Recommended');

  
    const handleUserNameClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

  
    const handleDropdownClose = () => {
        setAnchorEl(null);
    };

    const handleLogoClick = () => {
        setShowIndicator(!showIndicator);
    };
  return (
   
   <ThemeProvider theme={theme}>
     <>
     <Box sx={{display:'flex',justifyContent:'space-between',marginTop:'25px'}}>
          <Box sx={{display:'flex',gap:'5%'}}>
              <Typography sx = {{fontSize : '14px', whiteSpace: 'nowrap'}}><b>showing 4 of </b></Typography> 
              <h5 style ={{color: theme.palette.text.secondary, whiteSpace: 'nowrap'}}>257 places </h5>
          </Box>
          <div  style ={{whiteSpace: 'nowrap', display:'flex'}}>
          <Typography sx = {{fontSize: '14px'}}>Sort by <b> Recommended  </b> </Typography>
          <div>
            <img src ={ drop}  sx ={{marginLeft:'10px'}} onClick={handleUserNameClick} style={{ cursor: 'pointer' }} />
       

       <UserDropdown
          anchorEl={anchorEl}
          onClose={handleDropdownClose}
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
