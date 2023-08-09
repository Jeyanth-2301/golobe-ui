import * as React from 'react';
import { useState } from 'react';
import drop from '../../../assets/icons/drop-icons/drop.svg';
import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import UserDropdown from './sort-dropdown';
import theme from '../../../utils/theme/theme.jsx';

export default function BasicButtons({ items, buttonStatus }) {
    const [selectedOption, setSelectedOption] = useState('Recommended');
    const [anchorEl, setAnchorEl] = useState(null);

    const handleUserNameClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDropdownClose = () => {
        setAnchorEl(null);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px', marginBottom: '10px' }}>
                <Box sx={{ display: 'flex', gap: '5%', marginLeft: 4 }}>
                    <Typography sx={{ fontSize: '14px', whiteSpace: 'nowrap',marginLeft: -3 }}>
                        <b>Showing {Math.min(items.length, buttonStatus ? items.length : 4)} of </b>
                    </Typography>
                    <h5 style={{ color: theme.palette.text.secondary, whiteSpace: 'nowrap' }}>
                        {items.length} places
                    </h5>
                </Box>
                <div style={{ whiteSpace: 'nowrap', display: 'flex', marginRight: 22 }}>
                    <Typography sx={{ fontSize: '14px' }}>Sort by <b>{selectedOption}</b> </Typography>
                    <div>
                        <img src={drop} sx={{ marginLeft: '10px' }} onClick={handleUserNameClick} style={{ cursor: 'pointer' }} />

                        <UserDropdown
                            anchorEl={anchorEl}
                            onClose={handleDropdownClose}
                            setSelectedOption={setSelectedOption}
                            onLogout={() => {
                                handleDropdownClose();
                                setLoggedIn(false);
                            }}
                        />
                    </div>
                </div>
            </Box>
        </ThemeProvider>
    );
}
