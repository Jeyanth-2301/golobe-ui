import React, { useState, useRef } from 'react';
import { Typography, Paper, Grid, Box, Avatar } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Edit from '../../assets/icons/profilepageicons/Edit.svg';
import Add from '../../assets/icons/profilepageicons/Add.svg';
import Button from '@mui/material/Button';
const App = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [anotherEmail, setAnotherEmail] = useState('');
  const [password, setPassword] = useState('********************');
  const [phoneNumber, setPhoneNumber] = useState('9999999999');
  const [address, setAddress] = useState('St 32 main downtown, Los Angeles, California, USA');
  const [dateOfBirth, setDateOfBirth] = useState('01-01-1992');
  const [profileImage, setProfileImage] = useState('https://s3-alpha-sig.figma.com/img/de42/3158/13dc5b2e20dc60002c5ebc10bec549e3?Expires=1691971200&Signature=ZHzAq5Bk5EtbGxurRfqS~zdOjE-gM~MqPhIhiy4~0oZeKBZuXxWQ5wO7oSi~GlRdCULMNOa3~PbJVxvkGF4uWBht40SUWPLZBpZGSdDV-BPFdE-Dm-isnLYdlFQDoRT~3w-ZAlKnAwkI6P93dDJiQhap2ud5nDX5utE5xFfx9Rn03Pub8acxrz7Tvc0kUjTdMzQujBNeSQ6xIMQzfd~bNipy04UMDozckMvKQg4GWJUWWXOYL6WSPubSADq0jvNXSEh5uYDCeXacb0cYslL1LtgbLPScjtJ2Cjyql~0hHZS2YBG4d6fly77Fit~d7k~zouNqX-G4CvfhN4PFkA8h-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');

  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [isAnotherEmail, setIsAnotherEmailEditing] = useState(false);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  const [isPhoneNumberEditing, setIsPhoneNumberEditing] = useState(false);
  const [isAddressEditing, setIsAddressEditing] = useState(false);
  const [isDateOfBirthEditing, setIsDateOfBirthEditing] = useState(false);
  const [originalName, setOriginalName] = useState(name);
  const [originalEmail, setOriginalEmail] = useState(email);
  const [originalAnotherEmail, setOriginalAnotherEmail] = useState(anotherEmail);
  const [originalPassword, setOriginalPassword] = useState(password);
  const [originalPhoneNumber, setOriginalPhoneNumber] = useState(phoneNumber);
  const [originalAddress, setOriginalAddress] = useState(address);
  const [originalDateOfBirth, setOriginalDateOfBirth] = useState(dateOfBirth);
  const handleCancel = () => {
    setName(originalName);
    setEmail(originalEmail);
    setAnotherEmail(originalAnotherEmail);
    setPassword(originalPassword);
    setPhoneNumber(originalPhoneNumber);
    setAddress(originalAddress);
    setDateOfBirth(originalDateOfBirth);
    setIsNameEditing(false);
    setIsEmailEditing(false);
    setIsAnotherEmailEditing(false);
    setIsPasswordEditing(false);
    setIsPhoneNumberEditing(false);
    setIsAddressEditing(false);
    setIsDateOfBirthEditing(false);
  };
  const handleSave = () => {
    if (isNameEditing && name.trim().length > 2) {
      setName(name.trim());
      setIsNameEditing(false);
    }
    if (isPasswordEditing && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
      setPassword(password.trim());
      setIsPasswordEditing(false);
    }
    if (isEmailEditing && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmail(email.trim());
      setIsEmailEditing(false);
    }
    if (isAnotherEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(anotherEmail)) {
      setAnotherEmail(anotherEmail.trim());
      setIsAnotherEmailEditing(false);
    }
    if (isPhoneNumberEditing && phoneNumber.trim().length === 10) {
      setPhoneNumber(phoneNumber.trim());
      setIsPhoneNumberEditing(false);
    }
    if (isAddressEditing && address.trim().length > 5) {
      setAddress(address.trim());
      setIsAddressEditing(false);
    }
    if (isDateOfBirthEditing && inputDate <= currentDate) {
      setDateOfBirth(dateOfBirth.trim());
      setIsDateOfBirthEditing(false);
    }
  };
  const fileInputRef = useRef(null);

  const isJpgFile = (file) => {
    return file.type === 'image/jpeg';
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && isJpgFile(file)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Update the profileImage state with the new image data
      };

      reader.readAsDataURL(file);
    } else {
      // Handle invalid file type (not a JPG)
      alert('Please select a JPG image file.');
    }
  };
  const handleImageReset = (e) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

 
  return (
    <div>
      <Box padding="70px">
        <Box paddingTop="100px" sx={{ width: '1300px', height: '350px', position: 'relative' }} >
          <div style={{ cursor: 'pointer', position: 'relative', height: '40vh', marginLeft: '5%' }} >
            <img
              src="https://s3-alpha-sig.figma.com/img/b911/29fb/09d33d4d260d902f404ce31c509b1086?Expires=1691971200&Signature=oflC3FQiqTFJY~uuNnn-jyV8MqjNmaswYJjPWa1cJP8Dt1ScDafiZEESO~euFE39lu0gFZzqiaiUCta3iUsdpiw7-Bq7BZMASndbmb-OnYeNwqS1dlFywOHIY35h1ss3NQwxTZSppEkfo5qjgl4ZesHad-2m1kL8z-sibaAqnB-XcswnV3jwYLTOEjBsILE6h3m7iw-pT3zcuW7bCzbLsvy8qhB9-vLx4l-JWfd7gCBSj3wcfacVqmWyF0hSCe7sKZc0R8meZDr8vi5sttiDR8o1xuKKo4EfRJb5ybX1j9VrtB5yZgNH7sx4P~kzZlXbeFeLedwTvvm77g0aK2aahQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="profile"
              style={{
                width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px',
              }} />
            <input id="cover-image-input" type="file" style={{ display: 'none' }} onChange={handleImageChange} />
           
            <div style={{
              position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', 
              width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', marginBottom: '-90px',
            }}>
             {/* //person image */}
              <img
                src="https://s3-alpha-sig.figma.com/img/de42/3158/13dc5b2e20dc60002c5ebc10bec549e3?Expires=1691971200&Signature=ZHzAq5Bk5EtbGxurRfqS~zdOjE-gM~MqPhIhiy4~0oZeKBZuXxWQ5wO7oSi~GlRdCULMNOa3~PbJVxvkGF4uWBht40SUWPLZBpZGSdDV-BPFdE-Dm-isnLYdlFQDoRT~3w-ZAlKnAwkI6P93dDJiQhap2ud5nDX5utE5xFfx9Rn03Pub8acxrz7Tvc0kUjTdMzQujBNeSQ6xIMQzfd~bNipy04UMDozckMvKQg4GWJUWWXOYL6WSPubSADq0jvNXSEh5uYDCeXacb0cYslL1LtgbLPScjtJ2Cjyql~0hHZS2YBG4d6fly77Fit~d7k~zouNqX-G4CvfhN4PFkA8h-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="user"
                style={{
                  width: '90%', height: '90%', position: 'absolute', bottom: 0,
                  left: '50%', transform: 'translateX(-50%)', zIndex: 1, borderRadius: '50%',
                  overflow: 'hidden', objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute', bottom: '5px', left: '70%', transform: 'translateX(-50%)', borderRadius: '80%',
                cursor: 'pointer', zIndex: 1,
              }}
                onClick={() => handleImageReset()} >
                <Button onClick={() => fileInputRef.current?.click()} sx={{marginBottom:'-0.2%'}}>
                  <div style={{ display: 'inline-block', borderRadius: '60%', backgroundColor: '#FF8682',padding:'1.5px',height:'30px' ,width:'30px',bottom:'10px',right:'10px' ,marginLeft:"10px",marginBottom:'-1px'}}>
                    <img src="src/assets/icons/profilepageicons/Pen.svg" alt="Pen" sx={{marginTop:2,width:'9px',height:'9px'}} /></div></Button>
              </div>
            </div>
            <input ref={fileInputRef} id="profile-image" type="file" style={{ display: 'none' }} onChange={handleImageChange} />
            <Button variant="contained" onClick={() => fileInputRef.current?.click()}
              style={{ position: 'absolute', bottom: '30px', right: '30px', zIndex: 1, color: 'black' }}
            ><CloudUploadIcon />Upload new cover</Button>
          </div>
          <Box sx={{ marginTop: '80px', marginLeft: "4.5%" }}>
            <div style={{ textAlign: 'center', paddingTop: '20px' }}>

              <Typography variant="d">{name}</Typography><br />
              <Typography variant="b">{email}</Typography>
            </div></Box>
        </Box>

        <Box paddingTop="250px" sx={{ height: '592px', width: '1232px', marginLeft: '70px', marginRight: '120px' }}>
          <Typography variant="c" sx={{ fontSize: '32px', fontWeight: 700, paddingBottom: '4px' }}>
            Account
          </Typography> <br />
          <Paper elevation={4} sx={{ padding: 4, width: '1232px', borderRadius: '10px', marginTop: 3 }}>
            <Grid container direction="column" spacing={4}>
              <Grid item container justifyContent="space-between" alignItems="center">
                <Grid item>
                  <Typography variant="b" >Name:</Typography><br />
                  {isNameEditing ? (
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                  ) : (
                    <Typography variant="a">{name}</Typography>
                  )}

                </Grid>
                <Grid item>

                  <Button variant='outlined' onClick={() => setIsNameEditing(true)}><Typography variant="b"><img src={Edit} />Change</Typography></Button>
                </Grid>
              </Grid>
              <Grid item container justifyContent="space-between" alignItems="center">
                <Grid item>
                  <Typography variant="b">Email:</Typography><br />
                  {isEmailEditing ? (
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  ) : (
                    <Typography variant="a">{email}</Typography>
                  )}<br />
                  {isAnotherEmail ? (
                    <input type="email" value={anotherEmail} onChange={(e) => setAnotherEmail(e.target.value)} />
                  ) : (<Typography variant="a">{anotherEmail}</Typography>)}

                </Grid>

                <Grid item >
                  <Button variant='outlined' onClick={() => setIsAnotherEmailEditing(true)}><Typography variant="b"><img src={Add} />Add another email</Typography></Button>
                  <Button variant='outlined' onClick={() => setIsEmailEditing(true)}><Typography variant="b"><img src={Edit} />Change</Typography></Button>
                </Grid>
              </Grid>


              <Grid item container justifyContent="space-between" alignItems="center">
                <Grid item>
                  <Typography variant="b">Password:</Typography><br />
                  {isPasswordEditing ? (
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                  ) : (
                    <Typography variant="a">{password}</Typography>
                  )}
                </Grid>
                <Grid item>
                  <Button variant='outlined' onClick={() => setIsPasswordEditing(true)}><Typography variant="b"><img src={Edit} />Change</Typography></Button>
                </Grid>
              </Grid>
              <Grid item container justifyContent="space-between" alignItems="center">
                <Grid item>
                  <Typography variant="b">Phone Number:</Typography><br />
                  {isPhoneNumberEditing ? (
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                  ) : (
                    <Typography variant="a">{phoneNumber}</Typography>
                  )}
                </Grid>
                <Grid item>
                  <Button variant='outlined' onClick={() => setIsPhoneNumberEditing(true)}><Typography variant="b"><img src={Edit} />Change</Typography></Button>
                </Grid>
              </Grid>
              <Grid item container justifyContent="space-between" alignItems="center">
                <Grid item>
                  <Typography variant="b">Address:</Typography><br />
                  {isAddressEditing ? (
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                  ) : (
                    <Typography variant="a">{address}</Typography>
                  )}
                </Grid>
                <Grid item>
                  <Button variant='outlined' onClick={() => setIsAddressEditing(true)} ><Typography variant="b"><img src={Edit} />Change</Typography></Button>
                </Grid>
              </Grid>
              <Grid item container justifyContent="space-between" alignItems="center">
                <Grid item>
                  <Typography variant="b">Date of Birth:</Typography><br />
                  {isDateOfBirthEditing ? (
                    <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                  ) : (
                    <Typography variant="a">{dateOfBirth}</Typography>
                  )}
                </Grid>
                <Grid item>
                  <Button variant='outlined' onClick={() => setIsDateOfBirthEditing(true)}><Typography variant="b"><img src={Edit} />Change</Typography></Button>
                </Grid>
              </Grid>
            </Grid>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
              {isNameEditing || isEmailEditing || isAnotherEmail || isPasswordEditing || isPhoneNumberEditing || isAddressEditing || isDateOfBirthEditing ? (
                <Grid item>
                  <Button variant='outlined' onClick={handleCancel}><Typography variant="b">Cancel</Typography></Button>
                  <Button variant='outlined' color='error' onClick={handleSave}><Typography variant="b">Save Profile</Typography></Button></Grid>
              ) : null}
            </div>
          </Paper>
        </Box>
      </Box>
    </div>
  );
};

export default App;
