import React, { useState, useRef } from 'react';
import { Typography, Paper, Grid, Box, Button, Avatar } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Edit from '../../assets/icons/profilepage-icons/Edit.svg';
import Add from '../../assets/icons/profilepage-icons/Add.svg';

const Profilepage = () => {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@example.com');
    const [anotherEmail, setAnotherEmail] = useState('');
    const [password, setPassword] = useState('********************');
    const [phoneNumber, setPhoneNumber] = useState('9999999999');
    const [address, setAddress] = useState('St 32 main downtown, Los Angeles, California, USA');
    const [dateOfBirth, setDateOfBirth] = useState('01-01-1992');

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
        if (name.trim().split(' ').length > 2) {
            setName(name.trim());
            setIsNameEditing(false);
        }

        if (isPasswordEditing && password.trim().split(' ').length > 2) {
            setPassword(password.trim());
            setIsPasswordEditing(false);
        }

        if (isEmailEditing && email.trim().split(' ').length > 3) {
            setEmail(email.trim());
            setIsEmailEditing(false);
        }

        if (isAnotherEmail && anotherEmail.trim().split(' ').length > 3) {
            setEmail(anotherEmail.trim());
            setIsAnotherEmail(false);
        }

        if (isPhoneNumberEditing && phoneNumber.trim().length === 10) {
            setPhoneNumber(phoneNumber.trim());
            setIsPhoneNumberEditing(false);
        }

        if (isAddressEditing && address.trim().split(' ').length > 3) {
            setAddress(address.trim());
            setIsAddressEditing(false);
        }

        if (isDateOfBirthEditing && dateOfBirth.trim().split(' ').length > 3) {
            setDateOfBirth(dateOfBirth.trim());
            setIsDateOfBirthEditing(false);
        }
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
            <Box padding="70px">
                <Box paddingTop="100px"

                    sx={{ width: '1300px', height: '350px', position: 'relative' }} >

                    <div style={{ cursor: 'pointer', position: 'relative', height: '40vh', marginLeft: '5%' }} >
                        <img
                            src="https://s3-alpha-sig.figma.com/img/b911/29fb/09d33d4d260d902f404ce31c509b1086?Expires=1691971200&Signature=oflC3FQiqTFJY~uuNnn-jyV8MqjNmaswYJjPWa1cJP8Dt1ScDafiZEESO~euFE39lu0gFZzqiaiUCta3iUsdpiw7-Bq7BZMASndbmb-OnYeNwqS1dlFywOHIY35h1ss3NQwxTZSppEkfo5qjgl4ZesHad-2m1kL8z-sibaAqnB-XcswnV3jwYLTOEjBsILE6h3m7iw-pT3zcuW7bCzbLsvy8qhB9-vLx4l-JWfd7gCBSj3wcfacVqmWyF0hSCe7sKZc0R8meZDr8vi5sttiDR8o1xuKKo4EfRJb5ybX1j9VrtB5yZgNH7sx4P~kzZlXbeFeLedwTvvm77g0aK2aahQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt="profile"
                            style={{
                                width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px',
                            }} />
                        <input
                            id="cover-image-input"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                        <div
                            style={{
                                position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)',
                                width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden',
                                marginBottom: '-120px'
                            }}
                        >
                            <Avatar
                                alt="Remy Sharp"
                                src="https://s3-alpha-sig.figma.com/img/de42/3158/13dc5b2e20dc60002c5ebc10bec549e3?Expires=1691971200&Signature=ZHzAq5Bk5EtbGxurRfqS~zdOjE-gM~MqPhIhiy4~0oZeKBZuXxWQ5wO7oSi~GlRdCULMNOa3~PbJVxvkGF4uWBht40SUWPLZBpZGSdDV-BPFdE-Dm-isnLYdlFQDoRT~3w-ZAlKnAwkI6P93dDJiQhap2ud5nDX5utE5xFfx9Rn03Pub8acxrz7Tvc0kUjTdMzQujBNeSQ6xIMQzfd~bNipy04UMDozckMvKQg4GWJUWWXOYL6WSPubSADq0jvNXSEh5uYDCeXacb0cYslL1LtgbLPScjtJ2Cjyql~0hHZS2YBG4d6fly77Fit~d7k~zouNqX-G4CvfhN4PFkA8h-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                sx={{ width: '180px', height: '180px', marginBottom: '-3%' }}
                            />



                            {/*             
            <img
              src="https://s3-alpha-sig.figma.com/img/de42/3158/13dc5b2e20dc60002c5ebc10bec549e3?Expires=1691971200&Signature=ZHzAq5Bk5EtbGxurRfqS~zdOjE-gM~MqPhIhiy4~0oZeKBZuXxWQ5wO7oSi~GlRdCULMNOa3~PbJVxvkGF4uWBht40SUWPLZBpZGSdDV-BPFdE-Dm-isnLYdlFQDoRT~3w-ZAlKnAwkI6P93dDJiQhap2ud5nDX5utE5xFfx9Rn03Pub8acxrz7Tvc0kUjTdMzQujBNeSQ6xIMQzfd~bNipy04UMDozckMvKQg4GWJUWWXOYL6WSPubSADq0jvNXSEh5uYDCeXacb0cYslL1LtgbLPScjtJ2Cjyql~0hHZS2YBG4d6fly77Fit~d7k~zouNqX-G4CvfhN4PFkA8h-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="user"
              style={{
                width: '60%',height: '60%', position: 'absolute',bottom: 0,
              left: '50%',transform: 'translateX(-50%)',zIndex: 1,borderRadius: '50%', 
              overflow: 'hidden', objectFit:'cover'
              }}
            /> */}
                            <div
                                style={{
                                    position: 'absolute', bottom: '5px', left: '70%',
                                    transform: 'translateX(-50%)', borderRadius: '80%',
                                    cursor: 'pointer',
                                    zIndex: 1,
                                }}
                                onClick={() => handleImageReset()}
                            ><Button onClick={() => fileInputRef.current?.click()}>
                                    <div style={{ display: 'inline-block', borderRadius: '50%', backgroundColor: '#FF8682', padding: '5px', }}>
                                        <img src="src/assets/icons/profilepageicons/Pen.svg" alt="Pen" /></div></Button>
                            </div>
                        </div>

                        <input
                            ref={fileInputRef}
                            id="profile-image"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                        <Button variant="contained" onClick={() => fileInputRef.current?.click()}
                            style={{ position: 'absolute', bottom: '30px', right: '30px', zIndex: 1, color: 'black' }}
                        >
                            <CloudUploadIcon />Upload new cover</Button>
                    </div>
                    <Box sx={{ marginTop: '80px', marginLeft: "4.5%" }}>
                        <div style={{ textAlign: 'center', paddingTop: '20px' }}>

                            <Typography variant="dd">{name}</Typography><br />
                            <Typography variant="bb">{email}</Typography>
                        </div></Box>
                </Box>

                <Box paddingTop="250px"
                    sx={{ height: '592px', width: '1232px', marginLeft: '70px', marginRight: '120px' }}>
                    <Typography variant="cc" sx={{ fontSize: '32px', fontWeight: 700, paddingBottom: '4px' }}>
                        Account
                    </Typography> <br />
                    <Paper elevation={4} sx={{ padding: 4, width: '1232px', borderRadius: '10px', marginTop: 3 }}>
                        <Grid container direction="column" spacing={4}>
                            <Grid item container justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    <Typography variant="bb" >Name:</Typography><br />
                                    {isNameEditing ? (
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                    ) : (
                                        <Typography variant="aa">{name}</Typography>
                                    )}

                                </Grid>
                                <Grid item>
                                    {isNameEditing ? (
                                        <div>
                                            <Button variant='outlined' color="error" onClick={() => setIsNameEditing(false)}>Cancel</Button>
                                        </div>
                                    ) : (
                                        <Button variant='outlined' onClick={() => setIsNameEditing(true)}><Typography variant="bb"><img src={Edit} />Change</Typography></Button>
                                    )}
                                </Grid>
                            </Grid>
                            <Grid item container justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    <Typography variant="bb">Email:</Typography><br />
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
                                    {isAnotherEmail ? (
                                        <div>
                                            <Button variant='outlined' color="error" onClick={() => setIsAnotherEmail(false)}>Cancel</Button>
                                        </div>
                                    ) : (
                                        <Button variant='outlined' onClick={() => setIsAnotherEmail(true)}><Typography variant="b"><img src={Add} />Add another email</Typography></Button>
                                    )}


                                    {isEmailEditing ? (
                                        <div>
                                            <Button color="error" onClick={() => setIsEmailEditing(false)}>Cancel</Button>
                                        </div>
                                    ) : (
                                        <Button variant='outlined' onClick={() => setIsEmailEditing(true)}><Typography variant="b"><img src={Edit} />Change</Typography></Button>
                                    )}
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
                                    {isPasswordEditing ? (
                                        <div>
                                            <Button variant='outlined' color="error" onClick={() => setIsPasswordEditing(false)}>Cancel</Button>
                                        </div>
                                    ) : (
                                        <Button variant='outlined' onClick={() => setIsPasswordEditing(true)}><Typography variant="b"><img src={Edit} />Change</Typography></Button>
                                    )}
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
                                    {isPhoneNumberEditing ? (
                                        <div>
                                            <Button variant='outlined' color="error" onClick={() => setIsPhoneNumberEditing(true)}>Cancel</Button>
                                        </div>
                                    ) : (
                                        <Button variant='outlined' onClick={() => setIsPhoneNumberEditing(true)}><Typography variant="b"><img src={Edit} />Change</Typography></Button>
                                    )}
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
                                    {isAddressEditing ? (
                                        <div>
                                            <Button variant='outlined' color="error" onClick={() => setIsAddressEditing(false)}>Cancel</Button>
                                        </div>
                                    ) : (
                                        <Button variant='outlined' onClick={() => setIsAddressEditing(true)} ><Typography variant="b"><img src={Edit} />Change</Typography></Button>
                                    )}
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
                                    {isDateOfBirthEditing ? (
                                        <div>
                                            <Button variant='outlined' color="error" onClick={() => setIsDateOfBirthEditing(false)}>Cancel</Button>
                                        </div>
                                    ) : (
                                        <Button variant='outlined' onClick={() => setIsDateOfBirthEditing(true)}><Typography variant="b"><img src={Edit} />Change</Typography></Button>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                            {isNameEditing || isEmailEditing || isAnotherEmail || isPasswordEditing || isPhoneNumberEditing || isAddressEditing || isDateOfBirthEditing ? (
                                <button variant='outlined' onClick={handleSave}>Save Profile</button>
                            ) : null}
                        </div>
                    </Paper>
                </Box>
            </Box>
        </div>
    );
};

export default Profilepage;