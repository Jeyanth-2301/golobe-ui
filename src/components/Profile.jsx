import React, { useState, useRef } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { Typography, Paper, Grid, Box, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const App=  () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [anotherEmail, setAnotherEmail] = useState('');
  const [password, setPassword] = useState('********************');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [isAnotherEmail, setIsAnotherEmail] = useState(false);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  const [isPhoneNumberEditing, setIsPhoneNumberEditing] = useState(false);
  const [isAddressEditing, setIsAddressEditing] = useState(false);
  const [isDateOfBirthEditing, setIsDateOfBirthEditing] = useState(false);
  const [profileImage, setProfileImage] = useState('profile-picture.jpg'); // Default image
  const [coverImage, setCoverImage] = useState('profile-picture.png'); // Default cover image

  const handleSave = () => {
    console.log({
      name,
      email,
      anotherEmail,
      password,
      phoneNumber,
      address,
      dateOfBirth,
      profileImage,
      coverImage
    });
    setIsNameEditing(false);
    setIsEmailEditing(false);
    setIsAnotherEmail(false);
    setIsPasswordEditing(false);
    setIsPhoneNumberEditing(false);
    setIsAddressEditing(false);
    setIsDateOfBirthEditing(false);
  };
  const fileInputRef = useRef(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (e.target.id === 'cover-image-input') {
          setCoverImage(reader.result);
        } else if (e.target.id === 'profile-image-input') {
          setProfileImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageReset = (e) => {
    e.preventDefault(); 
    // Trigger click event on the file input to open the file picker dialog
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };


  return (
    <div>
      <Box
  paddingTop="100px"
  paddingLeft="160px"
  sx={{ width: '1232px', height: '350px', position: 'relative' }}
>
<div style={{ cursor: 'pointer',position: 'relative' }} >
    <img
      src="src/assets/profile/profile-picture.png"
      alt="profile"
      style={{
        width: '100%',height: '100%',objectFit: 'cover',borderRadius: '12px',
      }}/>
      <input
            id="cover-image-input"
            type="file"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
    <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '200px', // Adjust the size of the circular space here
              height: '200px', // Adjust the size of the circular space here
              borderRadius: '50%', // Make it circular
              overflow: 'hidden', 
              marginBottom:'-90px'
            }}
          >
            
            <img
              src="src/assets/profile/profileImage.png"
              alt="user"
              style={{
                width: '90%', // Adjust the size of the user's image
              height: '90%', // Adjust the size of the user's image
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1,
              borderRadius: '50%', // Make the user's image circular
              overflow: 'hidden', 
              }}
            />
            </div>
            
    <input
    ref={fileInputRef}
      id="profile-image"
      type="file"
      style={{ display: 'none' }}
      onChange={handleImageChange}
    />
    <Button
      variant="contained"
      color="primary"
      onClick={() => fileInputRef.current?.click()}
      style={{
        position: 'absolute',
        bottom: '30px',
        right: '30px',
        zIndex: 1, color: 'black',
      }}
    >
      <CloudUploadIcon />Upload new cover
    </Button>
  </div>
  <Box sx={{marginTop:'70px'}}>
  <div style={{ textAlign: 'center', marginBottom:'-500px' }}>
          
          <Typography>{name}</Typography>
          <Typography>{email}</Typography>
        </div></Box>
</Box>

      <Box paddingTop="120px"
      paddingLeft="50px" paddingRight="30px" sx={{ height: '592px', width: '1232px', marginLeft: '105px', marginRight: '104px' }}>
        <Typography sx={{ fontFamily: 'TradeGothic-LT-Extended', fontSize: '32px', position: 'relative', fontWeight: 700, lineHeight: 'normal',position: 'relative' }}>
          Account
        </Typography> <br />
        <Paper sx={{padding:2,margin:0, width: '1180px'}}>
          <Grid container direction="column" spacing={2}>
            <Grid item container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6">Name:</Typography>
                {isNameEditing ? (
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                ) : (
                  <Typography>{name}</Typography>
                )}
              </Grid>
              <Grid item>
                {isNameEditing ? (
                  <div>
                    <Button color="error" onClick={() => setIsNameEditing(false)}>Cancel</Button>
                  </div>
                ) : (
                  <Button style={{ color: 'black' }} onClick={() => setIsNameEditing(true)}><EditIcon />Change</Button>
                )}
              </Grid>
            </Grid>
            <Grid item container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6">Email:</Typography>
                {isEmailEditing ? (
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                ) : (
                  <Typography>{email}</Typography>
                )}
                {isAnotherEmail ? (
                  <input type="email" value={anotherEmail} onChange={(e) => setAnotherEmail(e.target.value)} />
                ) : ( <Typography>{anotherEmail}</Typography>)}
                
              </Grid>
              
              <Grid item>
              {isAnotherEmail? (
                  <div>
                    <Button color="error" onClick={() => setIsAnotherEmail(false)}>Cancel</Button>
                  </div>
                ) : (
                  <Button style={{ color: 'black' }} onClick={() => setIsAnotherEmail(true)}><AddCircleOutlinedIcon />Add another email</Button>
                )}
                
                
                {isEmailEditing ? (
                  <div>
                    <Button color="error" onClick={() => setIsEmailEditing(false)}>Cancel</Button>
                  </div>
                ) : (
                  <Button style={{ color: 'black' }} onClick={() => setIsEmailEditing(true)}><EditIcon />Change</Button>
                )}
              </Grid>
            </Grid>
            
            
            <Grid item container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6">Password:</Typography>
                {isNameEditing ? (
                  <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                ) : (
                  <Typography>{password}</Typography>
                )}
              </Grid>
              <Grid item>
                {isNameEditing ? (
                  <div>
                    <Button color="error" onClick={() => setIsPasswordEditing(false)}>Cancel</Button>
                  </div>
                ) : (
                  <Button style={{ color: 'black' }} onClick={() => setIsPasswordEditing(true)}><EditIcon />Change</Button>
                )}
              </Grid>
            </Grid>
            <Grid item container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6">Phone Number:</Typography>
                {isPhoneNumberEditing ? (
                  <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                ) : (
                  <Typography>{phoneNumber}</Typography>
                )}
              </Grid>
              <Grid item>
                {isPhoneNumberEditing ? (
                  <div>
                    <Button color="error" onClick={() => setIsPhoneNumberEditing(false)}>Cancel</Button>
                  </div>
                ) : (
                  <Button style={{ color: 'black' }} onClick={() => setIsPhoneNumberEditing(true)}><EditIcon />Change</Button>
                )}
              </Grid>
            </Grid>
            <Grid item container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6">Address:</Typography>
                {isAddressEditing ? (
                  <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                ) : (
                  <Typography>{address}</Typography>
                )}
              </Grid>
              <Grid item>
                {isAddressEditing ? (
                  <div>
                    <Button color="error" onClick={() => setIsAddressEditing(false)}>Cancel</Button>
                  </div>
                ) : (
                  <Button style={{ color: 'black' }} onClick={() => setIsAddressEditing(true)} ><EditIcon />Change</Button>
                )}
              </Grid>
            </Grid>
            <Grid item container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6">Date of Birth:</Typography>
                {isDateOfBirthEditing ? (
                  <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                ) : (
                  <Typography>{dateOfBirth}</Typography>
                )}
              </Grid>
              <Grid item>
                {isDateOfBirthEditing ? (
                  <div>
                    <Button color="error" onClick={() => setIsDateOfBirthEditing(false)}>Cancel</Button>
                  </div>
                ) : (
                  <Button style={{ color: 'black' }} onClick={() => setIsDateOfBirthEditing(true)}><EditIcon />Change</Button>
                )}
              </Grid>
            </Grid>
          </Grid>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
          {isNameEditing || isEmailEditing || isAnotherEmail || isPasswordEditing || isPhoneNumberEditing || isAddressEditing || isDateOfBirthEditing ? (
        <button onClick={handleSave}>Save Profile</button>
      ) : null}
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default App;
