import React from "react";
import { Box} from "@mui/material";
import ViewButton from "./ViewButton";
import FavIcon from "./FavIcon";

function FavAndView(){
    return( 
        <Box m ={1} display = "flex" justifyContent= "space-between">
             <FavIcon/>
             <ViewButton/>
        </Box> 
    );
}
export default FavAndView;



