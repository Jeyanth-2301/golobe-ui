import React from 'react';
import { MenuItem, Menu } from '@mui/material';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const UserDropdown = ({ anchorEl, onClose, onLogout }) => {
    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <Link to='/profile'><Button><MenuItem><Typography variant='body' >My Account</Typography></MenuItem></Button></Link>
            <MenuItem><Typography variant='body2'>Payments</Typography></MenuItem>
            <MenuItem><Typography variant='body2'>Settings</Typography></MenuItem>
            <MenuItem><Typography variant='body2'>Support</Typography></MenuItem>
            <MenuItem onClick={onLogout}><Typography variant='body2'>Logout</Typography></MenuItem>
        </Menu>
    );
};

export default UserDropdown;
