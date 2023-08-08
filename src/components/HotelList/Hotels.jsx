import React ,{useState}from "react";
import BasicButtons from "./Container/BasicButtons";
import MainCard from "./Container/MainCard";
import { Container, Box, Button } from "@mui/material";

function Hotels({data}) {
    // console.log(data)
    const [showAllHotels ,  setShowAllHotels] = useState(false);
    const getHotelsToShow =()=>{
        if(showAllHotels){
            return data;
        }
        else{
            return data.slice(0,4);
        }
    }
    return (
        <>
            <Box sx={{ marginTop: '' }}>
                <Container sx={{ width: '970px', height: '1508px', marginTop: '-810px', marginRight: '100px' }}>
                    <Box sx={{ height: '30px' }}>
                        <BasicButtons items = {data} />
                    </Box>       
                    <MainCard hotelData={getHotelsToShow()} showAllHotels={showAllHotels}  />       
                    <Box sx={{ marginTop: 3 }}>
                        <Button  onClick={()=> setShowAllHotels(!showAllHotels)}  
                              disableRipple disableElevation 
                            sx={{ width: 895, marginLeft: 1,height: '48px', backgroundColor: "#112211",
                            '&:hover': {
                                backgroundColor: '#112211'
                            }
                        }}>
                          {showAllHotels ? "Show less results" : "Show more results"}
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    )

}
export default Hotels;