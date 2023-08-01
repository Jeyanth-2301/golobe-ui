import React from "react";
import { Box} from "@mui/material";
import ViewButton from "./ViewButton";
import FavIcon from "./FavIcon";
import Divider from "@mui/material/Divider";

function FavAndView(){
    return( 
        <>
        <Box>
            <Box sx={{width:'90%',height:'1px', border:'1px solid rgba(0,0,0,0.2)', marginLeft:'20px', marginTop:'-50px', marginBottom:'20px'}}></Box>
            <Box m ={1} display = "flex" justifyContent= "space-between">
            <FavIcon/>
            <ViewButton/>
            </Box> 
        </Box>
        </>
    );
}
export default FavAndView;