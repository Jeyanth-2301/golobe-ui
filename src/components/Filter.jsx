import React,{useState} from 'react';
import Price from '../Container/Price';
import Rate from '../Container/Rate.jsx';
import Box from '@mui/material/Box';
import Ament from '../Container/Ament.jsx';
import Divider from '@mui/material/Divider';
export default function Filter() 
{
    const [selectedPrice, setSelectedPrice] = useState([50, 1200]);
    const [selectedRating, setSelectedRating] = useState(null);
    const handleChangePrice = (e) => {
      console.log(e.target.value);
      setSelectedPrice(e.target.value);
    }
    const handleSelectRating = (value) =>{
      setSelectedRating(value);
    }; 

return (
   
    <Box sx={{ width: 343,
      height: 785.5,
      top: 287,
      left: 104,
      gap: 400,bgcolor: 'background.paper' }}>
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

      );}