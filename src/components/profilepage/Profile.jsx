import React, { useState, useRef, useEffect } from "react";
import { Typography, Paper, Grid, Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Edit from "../../assets/icons/profilepage-icons/Edit.svg";
import pen from "../../assets/icons/profilepage-icons/Pen.svg";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";

const Profilepage = () => {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const [profileImage, setProfileImage] = useState(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngarts.com%2Fexplore%2F215270&psig=AOvVaw1ptEVunFYZXRUCCFyrgx5_&ust=1691664654130000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLi0tYi0z4ADFQAAAAAdAAAAABAE"
  );
  const [coverImage, setCoverImage] = useState(
    "https://s3-alpha-sig.figma.com/img/b911/29fb/09d33d4d260d902f404ce31c509b1086?Expires=1692576000&Signature=nMntYxuTFNKOuNcK4D-RIKbW10H2vjJPgRZMo40wtyfX7oZiNBWhq8Gm1EWnX7PwYx8mXQzfr9NjSYbpYWSeTfet6ZBN~es-t3BJaDa~fh6TfAoz7tjVeTax6zooZixFC27X9QXKQcw91tQVSMUwG1LUm8dK9d9EUznogN1DFsaZveuADWP40RWqmOjZnjP-M4jzGayNW7mPCToVExsNFwL74EBnNCtsYPOyrvVpEkBZqTFk5BQBinou8X46GK0b6BaYIoMPBiDJqhVjBt7IM5129VbTrXv2N~xN77ET6U5pAc41Yd6JhKXzmhGYU1qzP1mxwQm1ctSkbAiGSV5-RQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  );

  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isPhoneNumberEditing, setIsPhoneNumberEditing] = useState(false);
  const [isAddressEditing, setIsAddressEditing] = useState(false);
  const [isDateOfBirthEditing, setIsDateOfBirthEditing] = useState(false);

  const [originalName, setOriginalName] = useState(userName);
  const [originalEmail, setOriginalEmail] = useState(email);
  const [originalPassword, setOriginalPassword] = useState(password);
  const [originalPhoneNumber, setOriginalPhoneNumber] = useState(phoneNumber);
  const [originalAddress, setOriginalAddress] = useState(address);
  const [originalDateOfBirth, setOriginalDateOfBirth] = useState(dateOfBirth);
  const [selectedImageType, setSelectedImageType] = useState(null);

  const StyledTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#1C1B1F",
    },
    "& .MuiFormLabel-root": {
      fontSize: "19px",
      fontFamily: "Montserrat, sans-serif",
      color: "#1C1B1F",
    },

    width: "220px",
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "gray",
      },
    },
  });

  const handleError = (error) => {
    setSnackbarOpen(true);
    setSnackbarSeverity("error");
    setSnackbarMessage(error);
  };
  const handleSuccess = (message) => {
    setSnackbarOpen(true);
    setSnackbarSeverity("success");
    setSnackbarMessage(message);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3200/auth/users/user/profile",
        { withCredentials: true }
      );

      const userData = response.data;
      // Update state with the retrieved user data
      setName(userData.userName);
      setEmail(userData.email);
      setPhoneNumber(userData.phoneNumber);
      setPassword(userData.password);
      setAddress(userData.address);
      // Parse and format the dateOfBirth
      const parsedDate = new Date(userData.dateOfBirth);
      const formattedDate = parsedDate.toLocaleString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      setDateOfBirth(formattedDate);

      setOriginalName(userData.userName);
      setOriginalEmail(userData.email);
      setOriginalPhoneNumber(userData.phoneNumber);
      setOriginalPassword(userData.password);
      setOriginalAddress(userData.address);
      setOriginalDateOfBirth(formattedDate);
    } catch (error) {
      console.error("API error:", error);
      handleError(error);
    }
  };

  const handleCancel = () => {
    setName(originalName);
    setEmail(originalEmail);
    setPassword(originalPassword);
    setPhoneNumber(originalPhoneNumber);
    setAddress(originalAddress);
    setDateOfBirth(originalDateOfBirth);
    setIsNameEditing(false);
    setIsEmailEditing(false);
    setIsPasswordEditing(false);
    setIsPhoneNumberEditing(false);
    setIsAddressEditing(false);
    setIsDateOfBirthEditing(false);
  };
  const fetchProfileImage = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3200/auth/users/user/profile/getpicture",
        { type: "profile" },
        { withCredentials: true }
      );
      const imageUrl = response.data.picture;
      if (imageUrl != null) {
        setProfileImage(imageUrl);
      }
      setProfileImage(imageUrl);
    } catch (error) {
      console.error("Fetch profile image error:", error);
    }
  };
  const fetchCoverImage = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3200/auth/users/user/profile/getpicture",
        { type: "cover" },
        { withCredentials: true }
      );

      const imageUrl = response.data.picture;
      if (imageUrl != null) {
        setCoverImage(imageUrl);
      }
    } catch (error) {
      console.error("Fetch cover image error:", error);
    }
  };
  const handleImageChange = async (e, imageType) => {
    setSelectedImageType(imageType);
    const file = e.target.files[0];

    if (file && isJpgFile(file)) {
      const formData = new FormData();
      formData.append("picture", file);
      formData.append("type", imageType);

      try {
        const response = await axios.post(
          "http://localhost:3200/auth/users/user/profile/upload",
          formData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Image upload response:", response.data.message);
        const reader = new FileReader();
        reader.onloadend = () => {
          if (imageType === "profile") {
            setProfileImage(reader.result);
          } else if (imageType === "cover") {
            setCoverImage(reader.result);
          }
        };
        reader.readAsDataURL(file);
        handleSuccess(response.data.message);
      } catch (error) {
        console.error("Image upload error:", error);
        handleError(error.response.data.message);
      }
    } else {
      alert("Please select a JPG image file.");
    }
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const userNameFormData = new FormData();
    userNameFormData.append("userName", userName);
    console.log(userNameFormData);

    const emailFormData = new FormData();
    emailFormData.append("email", email);
    console.log(email);

    const passwordFormData = new FormData();
    passwordFormData.append("password", password);
    console.log(password);

    const phoneNumberFormData = new FormData();
    phoneNumberFormData.append("phoneNumber", phoneNumber);
    console.log(phoneNumber);

    const addressFormData = new FormData();
    addressFormData.append("address", address);
    console.log(address);

    const dateOfBirthFormData = new FormData();
    dateOfBirthFormData.append("dateOfBirth", dateOfBirth);
    if (isNameEditing && userName.length <= 0) {
      handleError("Email can't be empty");
      setName(originalName);
      setIsNameEditing(false);
      return false;
    }
    if (isPhoneNumberEditing && !/^[0-9]{10}$/.test(phoneNumber)) {
      handleError("Phone number is not valid");
      setPhoneNumber(originalPhoneNumber);
      setIsPhoneNumberEditing(false);
      return false;
    }
    if (isAddressEditing && address == "") {
      handleError("Address can't be empty");
      setAddress(originalAddress);
      setIsAddressEditing(false);
      return false;
    }
    if (isDateOfBirthEditing && !isValidDate(dateOfBirth)) {
      handleError("Phone number is not valid");
      setDateOfBirth(originalDateOfBirth);
      setIsDateOfBirthEditing(false);
      return false;
    }

    setName(userName);
    setPhoneNumber(phoneNumber);
    setDateOfBirth(dateOfBirth);
    setAddress(address);

    const apiUrl = "http://localhost:3200/auth/users/user/profile/update";
    console.log(apiUrl);
    const requestData = {
      userName: userName,
      phoneNumber: phoneNumber,
      address: address,
      dateOfBirth: dateOfBirth,
    };
    console.log(requestData);

    try {
      const response = await axios.post(apiUrl, requestData, {
        withCredentials: true,
      });
      handleSuccess(response.data.message);
      setIsNameEditing(false);
      setIsPhoneNumberEditing(false);
      setIsAddressEditing(false);
      setIsDateOfBirthEditing(false);
      console.log("API response:", response.data);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        handleError(error.response.data.message);
        console.error("API error:", error);
      }
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchCoverImage();
    fetchProfileImage();
  }, []);

  const isValidDate = (dateString) => {
    const currentDate = new Date();
    const enteredDate = new Date(dateString);
    return enteredDate < currentDate;
  };
  const fileInputRef = useRef(null);
  const coverImageInputRef = useRef(null);
  const isJpgFile = (file) => {
    return file.type === "image/jpeg";
  };
  const handleImageReset = () => {
    fileInputRef.current.value = null;
    fileInputRef.current.click();
  };
  const handleCoverImageReset = () => {
    coverImageInputRef.current.value = null;
    coverImageInputRef.current.click();
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <Box padding="70px">
          <Box
            paddingTop="70px"
            sx={{
              width: "1300px",
              height: "350px",
              position: "relative",
            }}
          >
            <div
              style={{
                cursor: "pointer",
                position: "relative",
                height: "40vh",
                marginLeft: "5%",
              }}
            >
              <img
                src={coverImage}
                alt="cover"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <input
                ref={coverImageInputRef}
                id="cover-image-input"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => handleImageChange(e, "cover")}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "-97px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "180px",
                  height: "180px",
                }}
              >
                {/* //person image */}
                <img
                  src={profileImage}
                  alt="profile"
                  style={{
                    width: "90%",
                    height: "90%",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                    borderRadius: "50%",
                    overflow: "hidden",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "9px",
                    left: "70%",
                    transform: "translateX(-50%)",
                    cursor: "pointer",
                    zIndex: 1,
                  }}
                  onClick={() => handleImageReset()}
                >
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    sx={{ marginBottom: "-0.2%" }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        borderRadius: "50%",
                        backgroundColor: "#FF8682",
                        padding: "2.5px", //pen in middle of the round
                        height: "30px",
                        width: "30px",
                        marginLeft: "15px",
                        marginBottom: "0px",
                      }}
                    >
                      <img src={pen} alt="Pen" />
                    </div>
                  </Button>
                </div>
              </div>
              <input
                ref={fileInputRef}
                id="profile-image"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => handleImageChange(e, "profile")}
              />

              <Button
                variant="contained"
                onClick={() => handleCoverImageReset()}
                style={{
                  position: "absolute",
                  bottom: "30px",
                  right: "30px",
                  zIndex: 1,
                  color: "black",
                }}
              >
                <CloudUploadIcon />
                Upload new cover
              </Button>
            </div>
            <Box sx={{ marginTop: "80px", marginLeft: "4.5%" }}>
              <div style={{ textAlign: "center", paddingTop: "20px" }}>
                <Typography variant="p4">{userName}</Typography>
                <br />
                <Typography variant="p2">{email}</Typography>
              </div>
            </Box>
          </Box>

          <Box
            paddingTop="200px"
            sx={{
              height: "592px",
              width: "1232px",
              marginLeft: "70px",
              marginRight: "120px",
              marginBottom: "300px",
            }}
          >
            <Typography variant="p3">Account</Typography> <br />
            <Paper
              elevation={4}
              sx={{ padding: 4, width: "1232px", marginTop: 2 }}
            >
              <Grid container direction="column" spacing={4}>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="p2">Name:</Typography>
                    <br />
                    {isNameEditing ? (
                      <TextField
                        id="userName"
                        lable="userName"
                        name="userName"
                        value={userName}
                        onChange={(e) => setName(e.target.value)}
                      />
                    ) : (
                      <Typography variant="p1">{userName}</Typography>
                    )}
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      onClick={() => setIsNameEditing(true)}
                    >
                      <Typography variant="p2">
                        <img src={Edit} />
                        Change
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="p2">Email:</Typography>
                    <br />
                    <Typography variant="p1">{email}</Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="p2">Password:</Typography>
                    <br />
                    <Typography variant="p1">{"*".repeat(8)}</Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="p2">Phone Number:</Typography>
                    <br />

                    {isPhoneNumberEditing ? (
                      <TextField
                        id="phoneNumber"
                        lable="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
      
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    ) : (
                      <Typography variant="p1">{phoneNumber}</Typography>
                    )}
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      onClick={() => setIsPhoneNumberEditing(true)}
                    >
                      <Typography variant="p2">
                        <img src={Edit} />
                        Change
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="p2">Address:</Typography>
                    <br />
                    {isAddressEditing ? (
                      <TextField
                        id="address"
                        lable="address"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    ) : (
                      <Typography variant="p1">{address}</Typography>
                    )}
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      onClick={() => setIsAddressEditing(true)}
                    >
                      <Typography variant="p2">
                        <img src={Edit} />
                        Change
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="p2">Date of Birth:</Typography>
                    <br />
                    {isDateOfBirthEditing ? (
                      <StyledTextField
                        type="date"
                        variant="outlined"
                        id="dateOfBirth"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                      ></StyledTextField>
                    ) : (
                      <Typography variant="p1">{dateOfBirth}</Typography>
                    )}
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      onClick={() => setIsDateOfBirthEditing(true)}
                    >
                      <Typography variant="p2">
                        <img src={Edit} />
                        Change
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "16px",
                }}
              >
                {isNameEditing ||
                isPhoneNumberEditing ||
                isAddressEditing ||
                isDateOfBirthEditing ? (
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={handleCancel}
                      sx={{ mr: 2 }}
                    >
                      <Typography variant="p2">Cancel</Typography>
                    </Button>
                    <Button
                      type="submit"
                      variant="outlined"
                      color="primary"
                      onClick={handleSave}
                    >
                      <Typography variant="p2">Save Profile</Typography>
                    </Button>
                  </Grid>
                ) : null}
              </Box>
            </Paper>
          </Box>
        </Box>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Profilepage;

