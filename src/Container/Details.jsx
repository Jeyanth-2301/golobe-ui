import { Grid } from "@mui/material";
import React from "react";
import Content from "./Content";
import FavAndView from "./FavAndView";
import Divider from '@mui/material/Divider';

function Details(){
    return(
        <Grid container rowSpacing={2}>
            <Content/>
            <Divider variant = "middle"/>
            <FavAndView/>
        </Grid>
    );
}
export default Details;