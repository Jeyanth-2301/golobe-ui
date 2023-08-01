import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home"
import Stays from "./pages/FindStays"
import HotelListing from "./pages/HotelListing"
import Login from "./pages/Login"



const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Stays />} />
          <Route path='/search-results' element={<HotelListing />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;