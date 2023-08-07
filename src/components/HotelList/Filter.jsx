import React, { useState, useEffect } from 'react';
import Price from './Container/Price';
import Rate from './Container/Rate.jsx';
import Box from '@mui/material/Box';
import Ament from './Container/Ament.jsx';
import Divider from '@mui/material/Divider';
import { useNavigate} from 'react-router-dom';

export default function Filter({handleSelectRating,handleChangePrice,handleCheckboxChange,extraAment, 
  selectedPrice,selectedRating,amenties,handleCheckboxChanges}) {
  const navigate=useNavigate();
//   const [selectedPrice, setSelectedPrice] = useState([50,1200]);
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [selectedAmenities, setSelectedAmenities] = useState([]);
//   const[selectExtraAment, setSelectExtraAment] = useState([]);
//   const [isMounted, setIsMounted] = useState(false);
//   const [amenties, setAmenties] = useState([
//     { id: 1, label: '24-hrs front desk', checked: false },
//     { id: 2, label: 'Air-conditioned', checked: false },
//     { id: 3, label: 'Fitness', checked: false },
//     { id: 4, label: 'Pool', checked: false }   ]);

//     const[extraAment, setExtraAment] = useState([
//     { id: 5, label: 'Free Wifi', checked: false },
//     { id: 6, label: 'Room Services', checked: false },
//     { id: 7, label: 'Airport Shuttle ', checked: false },
//     { id: 8, label: 'Spa and wellness', checked: false },
//     { id: 9, label: 'Non smoking ', checked: false },
//     { id: 10, label: 'Good breakfast', checked: false },
//     { id: 11, label: 'Free parking', checked: false }
   
// ])
// const handleChangePrice = (e, newValue) => {
//   setSelectedPrice(newValue);
// }

// const handleSelectRating = (value) => {
//   setSelectedRating(value);
// };

// const handleCheckboxChange = (id) => (event) => {
//   const updatedAmenties = amenties.map((amenty) =>
//     amenty.id === id ? { ...amenty, checked: event.target.checked } : amenty
//   );
//   setAmenties(updatedAmenties);

//   // Filter checked amenities and get the selected ones
//   const selectedAmenities = updatedAmenties.filter((amenty) => amenty.checked);
//   setSelectedAmenities(selectedAmenities);
// };
// const handleCheckboxChanges = (id) => (event) => {
//   const updatedAment = extraAment.map((amenty) =>
//     amenty.id === id ? { ...amenty, checked: event.target.checked } : amenty
//   );
//   setExtraAment(updatedAment);

//   // Filter checked amenities and get the selected ones
//   const selectedAmenities = updatedAment.filter((amenty) => amenty.checked);
//   setSelectExtraAment(selectedAmenities);
// };

// const handlefilter= ()=> {
//   const queryString = `?q=${encodeURIComponent(dest)}&checkIn=${encodeURIComponent(checkin)}&checkOut=${encodeURIComponent(checkout)}&rooms=${encodeURIComponent(rooms)}&priceRange=${encodeURIComponent(selectedPrice)}&ratings=${encodeURIComponent(selectedRating)}&amenities=${encodeURIComponent(selectedAmenities)}`;
// navigate(`/hotel-listing${queryString}`);
// }

// useEffect(()=>{

//       handlefilter();

// },[selectedPrice, selectedRating, selectedAmenities, selectExtraAment]);


// useEffect(() => {
//     handleSearch();
// }, [selectedPrice, selectedRating, selectedAmenities, selectExtraAment]);



  return (
    <div>
      <Box style={{ display: 'flex' }}>
        <Box sx={{
          width: 343,
          height: 785.5,
          marginTop: '105px',
          marginLeft: '104px',
          bgcolor: 'background.paper'
        }}>
          <Price
            value={selectedPrice}
            changePrice={handleChangePrice} />
          <Divider variant="middle" />
          <Rate
            value={selectedRating}
            selectRating={handleSelectRating} />

          <Divider variant="middle" />
          <Ament 
          amenties ={amenties}
          extraAment ={extraAment}
           handleCheck ={handleCheckboxChange}
            handleExtraCheck ={handleCheckboxChanges}
            />
        </Box>
      </Box>
    </div>
  );
}