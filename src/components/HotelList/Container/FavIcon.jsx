import { Box, Button, Card, CardMedia, Container, IconButton } from "@mui/material";
import React from "react";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from "react";
import axios from "axios";


function FavIcon({hotelIds}){
    //  console.log(hotelId)
    const [isFilled, setIsFilled] = useState(false);
    

    const handleIconClick =() =>{
            const newFav =  !isFilled;
           
            setIsFilled(newFav);
            const url = `http://localhost:3200/auth/users/favourites/${hotelIds}`;
            // console.log(url)
            const method = newFav ? 'POST' : 'DELETE';
            const fetchOptions = {
                method: method,
                headers: {"Content-Type":"application/json"},
                credentials: "include",
              };
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

        }  


    return(
        <IconButton  onClick = {handleIconClick} variant = "outlined" sx ={{maxHeight: '33px',width: 25,ml:4}} >
            <Button variant="outlined">
                {isFilled ? <FavoriteOutlinedIcon style={{ color: 'black' ,fontSize: 24}}/> : 
                 <FavoriteBorderOutlinedIcon  />
                }
            </Button>
        </IconButton>
    );
}
export default FavIcon;