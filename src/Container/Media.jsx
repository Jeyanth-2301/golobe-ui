import {Box,CardMedia} from "@mui/material";
import React from "react";

function Media({images}){
    return(
        <Box sx={{ display:'flex',flexDirection: 'column'}}>
            <CardMedia
                component="img"
                sx={{width: 300,height:400 }}
                image= {images}
                alt="Hotel"
            />
        </Box>
    );
}
export default Media;