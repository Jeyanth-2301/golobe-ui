import React,{useState,useEffect} from 'react';
import Price from './Container/Price';
import Rate from './Container/Rate.jsx';
import Box from '@mui/material/Box';
import Ament from './Container/Ament.jsx';
import Divider from '@mui/material/Divider';

export default function Filter() 
{
    const [selectedPrice, setSelectedPrice] = useState([50, 1200]);
    const [selectedRating, setSelectedRating] = useState(null);
    const handleChangePrice = (e,newValue) => {
      console.log(newValue);
      setSelectedPrice(newValue);
      sendDataToBackend(newValue);
    }
    const handleSelectRating = (value) =>{
      setSelectedRating(value);
      console.log(value);
      sendDataToBackend(value);
    }; 

    
    const handleViewAllTasks = async () => {
      try {
        console.log("try");
        const response = await fetch("http://localhost:5000/app/")
          .then(response => response.json());
        
        setAllTasks(response);
       
      } catch (error) {
        console.error("Error in fetching", error);
      }
    };
  
    useEffect(() => {
      handleViewAllTasks();
    }, []);
    const sendDataToBackend = async (selectedPrice) => {
      try {
        const url = 'https://64b7bb8221b9aa6eb078ec7c.mockapi.io/user'; // Replace with our backend API endpoint
        const ratevalue = selectedPrice;
        console.log("ratevalue",ratevalue);
        const data ={ratevalue : ratevalue}
        console.log(data);
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        console.log("Data",data)
  
        if (response.ok) {
          console.log('Data sent successfully!');
        } else {
          console.error('Error sending data to the backend.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
   

return (
   <div>
    <Box style ={{display :'flex'}}>
    <Box sx={{ width: 343,
      height: 785.5,
      marginTop:'105px',
      marginLeft:'104px',
       bgcolor: 'background.paper' }}>
        <Price
            value={selectedPrice}
            changePrice={handleChangePrice} />
        <Divider variant="middle" />
        <Rate
            value={selectedRating} 
            selectRating={handleSelectRating} />
            
        <Divider variant="middle" />
        <Ament />

     </Box>
     <Box sx={{height:'1600px',
      border:' 0.1px solid rgba(0,0,0,0.2)', 
      marginLeft:'35px',
      marginTop: '128px'}}>
      </Box>
     </Box>
     </div>
      );}