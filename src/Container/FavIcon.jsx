import {Button,IconButton} from "@mui/material";
import React from "react";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from "react";

function FavIcon(){
    const [isFilled, setIsFilled] = useState(false);
    const handleIconClick =() =>{
            setIsFilled(!isFilled);
    }  
    return(
        <IconButton  onClick = {handleIconClick} variant = "outlined"
            sx ={{maxHeight: '33px',width: 25,ml:4}}>
            <Button  variant="outlined">
                {isFilled ? <FavoriteOutlinedIcon style={{ color: 'black',fontSize: 24}}/>: 
                <FavoriteBorderOutlinedIcon  />}
            </Button>
        </IconButton>
    );
}
export default FavIcon;