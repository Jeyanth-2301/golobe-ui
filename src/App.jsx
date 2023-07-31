import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Stays from "./pages/FindStays"
import Hoteldetail from './components/Hoteldetail';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stays' element={<Stays />} />
        <Route path='/Hoteldetail'element={<Hoteldetail />} />
      </Routes>
    </div>
  );
};

export default App;