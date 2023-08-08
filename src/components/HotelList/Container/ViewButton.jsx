import React from "react";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ViewButton({ hotelIds }) {
    // console.log("id",hotelId)
    console.log("item", hotelIds);
    const navigate = useNavigate();
   
    const handleIconClick = () => {
          console.log("hotel",hotelIds);
          const queryString = `?q=${encodeURIComponent(hotelIds)}`;
          
          // const userId ="64cb50827767115059b3eaa7";
          // const url =`http://localhost:3200/auth/users/${userId}/recent/${hotelIds}`;
          // console.log(url)

          // axios
          // .put(url)
          // .then((response) =>{
          //   console.log('Request successful:', response);
          // })
          // .catch((error) =>{
          //   console.log('Error making request:', error);
          // })
          const url = `http://localhost:3200/auth/users/recent/${hotelIds}`;
          console.log(url);

          // Fetch options for the PUT request
          const fetchOptions = {
            method: 'PUT',
            headers: {"Content-Type":"application/json"},
            credentials: "include",
          };

// Make the PUT request using fetch()
fetch(url, fetchOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // You can use .text() or other methods depending on the response type
  })
  .then(data => {
    console.log('PUT request succeeded with response:', data);
  })
  .catch(error => {
    console.error('There was a problem with the PUT request:', error);
  });







    
          navigate(`/hotel-details${queryString}`);  
     
  };

  return (
    <Button
      size="large"
      onClick={handleIconClick}
      variant="outlined"
      disabledRipple
      sx={{
        width: '420px',
        height: '38px',
        backgroundColor: '#8DD3BB',
        marginRight: '28px',
        marginLeft: '50px',
        marginTop: -0.3,
      }}
    >
      <Typography
        color={'#112211'}
        sx={{
          fontFamily: 'Montserrat',
          fontSize: '16px',
          lineHeight: "normal",
          fontWeight: 500,
          fontStyle: "normal"
        }}
      >
        View Place
      </Typography>
    </Button>
  );
}

export default ViewButton;



