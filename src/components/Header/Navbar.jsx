import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar } from '@mui/material';
import findstays from '../../assets/icons/navbar-icons/find-stays.svg'
import logo from '../../assets/icons/navbar-icons/logo-2.svg'
import heart from '../../assets/icons/navbar-icons/heart.svg'
import profile from '../../assets/icons/navbar-icons/profile.jpg'
import UserDropdown from '../Header/user-dropdown';
import { styled } from '@mui/material/styles';
import theme from '../../utils/theme/theme'
import { Link } from 'react-router-dom';

const FancyButton = styled(Button)({
    background: 'black',
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(0,0,0,0.25)',
    color: 'white',
    height: 48,
    padding: '0 3.5vh',
    marginLeft: '8px',
    '&:hover': {
        background: 'white',
        color: 'black',
    },
});

const Navbar = () => {
    const [showIndicator, setShowIndicator] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false); // Track user login state
    const [anchorEl, setAnchorEl] = useState(null);
    // Function to handle click on the user name and show the dropdown
    const handleUserNameClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Function to handle closing the dropdown
    const handleDropdownClose = () => {
        setAnchorEl(null);
    };

    const handleLogoClick = () => {
        setShowIndicator(!showIndicator);
    };

    const logoText = "Find Stays";
    const processName = (name) => {
        if (name.includes(' ')) {
            // If the name contains a space, reject all words after the space
            return name.split(' ')[0];
        } else if (name.length > 8) {
            // If the name without space is longer than 8 letters, print the first seven letters and add '...'
            return name.substring(0, 7) + '...';
        } else {
            // Otherwise, return the original name
            return name;
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100; // Adjust the value as needed
            setShowIndicator(isTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const askLoggedInStatus = () => {
            // const response = window.prompt("Are you logged in? (yes/no)");
            // if (response && response.toLowerCase() === 'yes') {
            //     setLoggedIn(true);
            // } else {
            //     setLoggedIn(false);
            // }
        };

        askLoggedInStatus();
    }, []);
    const [hasProfilePicture, setHasProfilePicture] = useState(true); // Set it to `false` if the user doesn't have a profile picture
    // const linkStyle = {
    //     color: 'white',
    //     textDecoration: 'none',

    // }
    // const hoverLinkStyle = {
    //     color: 'black'
    // };
    return (
        <AppBar position="fixed" style={{ zIndex: showIndicator ? 1 : 1000, backgroundColor: 'white', padding: '10px 6%' }}>
            <Toolbar>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* SVG Icon */}
                    <img src={findstays} alt="" />

                    {/* Logo */}
                    <Typography
                        variant="body1"
                        component="div"
                        onClick={handleLogoClick}
                        style={{ cursor: 'pointer', marginLeft: '6px' }}
                    >
                        {logoText}
                    </Typography>

                    {/* Indicator */}
                    {showIndicator && (
                        <div
                            style={{
                                height: 7,
                                width: '9%',
                                backgroundColor: '#8DD3BB',
                                position: 'absolute',
                                bottom: -10,
                                left: 28,
                                transition: 'left 0.2s',
                            }}
                        />
                    )}
                </div>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', justifyContent: 'center' }} >
                    <img src={logo} alt="" />
                </Box>
                <div style={{ marginLeft: 'auto' }}>
                    {loggedIn ? (

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '7%' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4%' }}>
                                <img src={heart} />
                                <Typography>Favourites</Typography>
                            </Box>
                            <span>|</span>
                            <Box sx={{ display: 'flex', alignItems: 'center', margin: '2%' }}>
                                {hasProfilePicture ? (
                                    <Avatar src={profile} alt="User Avatar" sx={{
                                        width: 35,
                                        height: 35,
                                    }} />
                                ) : (
                                    <Avatar src="//" alt="J" sx={{ width: 40, height: 40 }} />)}
                                <Typography variant="body1" sx={{ marginLeft: '8px', cursor: 'pointer' }} onClick={handleUserNameClick}>
                                    {processName('John Doe')}
                                </Typography>
                            </Box>
                            {/* <Button onClick={() => setLoggedIn(false)} sx={{ color: theme.palette.text.primary, marginLeft: '16px' }}>
                                Logout
                            </Button> */}
                        </Box>
                    ) : (
                        // Show "Signin" and "Login" buttons when not logged in
                        <>
                            <Button onClick={() => setLoggedIn(true)} sx={{ color: theme.palette.text.primary }}>
                                Signin
                            </Button>
                            <Link to='/login' ><FancyButton>Login</FancyButton></Link>
                        </>
                    )}
                    <UserDropdown
                        anchorEl={anchorEl}
                        onClose={handleDropdownClose}
                        onLogout={() => {
                            handleDropdownClose(); // Close the dropdown after logout
                            setLoggedIn(false);
                        }}
                    // Add more props as needed for your custom dropdown items
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
