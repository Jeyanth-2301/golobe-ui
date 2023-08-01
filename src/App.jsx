import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Stays from "./pages/FindStays"
import HotelDetails from './pages/HotelDetails';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HotelDetails />} />
        <Route path='/stays' element={<Stays />} />
      </Routes>
    </div>
  );
};

export default App;