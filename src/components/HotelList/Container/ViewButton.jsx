import React from "react";
import { Button, Typography } from "@mui/material";

function ViewButton(){
    return(
        <Button  size ="large" variant = "outlined"  disableRipple disableElevation   
            sx ={{  width: '420px',height: '38px', 
                    backgroundColor: '#8DD3BB',
                    marginRight: '28px',
                    marginLeft: '50px',
                    marginTop:-0.3,  
                    '&:hover': {
                        backgroundColor:'#8DD3BB' }  }}  >
                <Typography variant = "rating" color = {'#112211'} sx={{cursor:'pointer' }} >
                    View Place
                </Typography> 
        </Button>
    );
}
export default ViewButton;