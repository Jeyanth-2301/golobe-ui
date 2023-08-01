import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Stays from "./pages/FindStays"
import Hoteldetail from "./pages/Hoteldetail"

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<HotelDe />} /> */}
        <Route path='/stays' element={<Stays />} />
        <Route path='/Hoteldetail'element={<Hoteldetail />} />
      </Routes>
    </div>
  );
};

export default App;