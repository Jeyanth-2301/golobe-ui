import React from "react";
import BasicButtons from "../Container/BasicButtons";
import MainCard from "../Container/MainCard";
import { Container,Box, Button } from "@mui/material";

function Hotels(){
    const images = [
        "/hotels/hotels1.jpg",
        "/hotels/hotels2.jpg",
        "/hotels/hotels3.jpg",
        "/hotels/hotels4.jpg",
      ];
    return(
        <>
            <Container sx = {{width:'899px', height: '1508px',marginTop: '100px'}}>
                <Box sx = {{height: '150px'}}>
                   <BasicButtons/>           
                </Box>
                <Box>      
                 {[...Array(4)].map((_, index) => (
                     <MainCard key={index} images ={images[index]} />
                ))}
                </Box> 
                <Box sx ={{marginTop: 3}}>
                    <Button sx = {{width: 858,height: '48px',backgroundColor: "#112211"}}>
                        Show more results
                    </Button>
                </Box>
            </Container>
           
        </>
    )

}
export default Hotels;