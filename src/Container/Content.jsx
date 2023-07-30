import { Card, Grid ,CardContent,Button, Typography} from "@mui/material";
import CoffeeIcon from '@mui/icons-material/Coffee';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import {React, useState} from "react";

function Content(){
    const [value, setValue] = useState(5);
    return(                  
        <Card sx = {{height: 220}}>
            <CardContent>
                <Grid item sx={{ flex: '1 0 auto',marginLeft: 54}} >                                   
                    <Typography variant = "price">
                        Starting from
                    </Typography>
                    <Typography variant = "subheading">
                            <subheader> $104/night</subheader>
                    </Typography>
                    <Typography 
                        sx={{ fontFamily: 'Montserrat',fontSize: '13px',marginLeft: 4.5}}>
                        excl. tax
                    </Typography>                            
                </Grid>         
                <Grid item sx = {{textAlign : 'left',marginTop: -6.5,marginBottom: 2 }}>
                    <Typography variant = "heading">CVK Park Bosphorus Hotel Istanbul</Typography>
                </Grid>
                <Grid container direction="row" alignItems="center">   
                    <Grid item sx={{ textAlign: 'left'}}><LocationOnIcon/></Grid>
                    <Grid item sx={{textAlign:'left',marginBottom: 2,marginTop:1}}>      
                        <Typography variant = "address">
                            Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                        </Typography>
                    </Grid>   
                   <Grid container direction = "row">  
                        <Grid item sx = {{marginBottom: 3}}>
                            <Rating sx ={{color: "#FF8682"}}
                                name="simple-controlled"
                                value={value}
                                onChange={(newValue) => {
                                setValue(newValue);
                                }} />
                        </Grid>    
                        <Grid item sx = {{flexDirection : 'row',marginTop: 0.3}}>
                            <Typography variant = "rating">{Math.round(value)} Star Hotel</Typography>         
                        </Grid>
                        <Grid item sx = {{textAlign :  'left',marginLeft: 10,fontSize: 14}}>
                            <CoffeeIcon size = "small"/>
                            <Grid sx = {{marginLeft: 4,marginTop: -3}}>
                            <Typography variant = "amenities">20+Aminities</Typography>
                            </Grid> 
                        </Grid>  
                    </Grid>  
                    <Button variant="outlined" sx = {{marginTop: -1,height:'40px',color: "#112211"}}> 4.2</Button>
                    <Grid item sx ={{marginTop: -1,pl:1}}><b>Very Good</b> 371reviews</Grid>        
                </Grid>
            </CardContent>
        </Card>
    );
}
export default Content;