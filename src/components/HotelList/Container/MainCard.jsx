import {Card} from "@mui/material";
import React from "react";
import Media from "./Media";
import Details from "./Details";

function MainCard({images}){
    return(
    <>     
        <Card sx={{display: 'flex', margin: 1, height: 299,elevation : 4, width: 850,marginBottom: '50px', borderRadius:'12px',marginTop: '55px'}} >
            <Media  images = {images}/>
            <Details />
        </Card>             
    </>
    );
}
export default MainCard;