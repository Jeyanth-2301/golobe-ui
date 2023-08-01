import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home"
import Stays from "./pages/FindStays"
// import HotelListing from "./pages/HotelListing"
import Login from "./pages/Login"
import Layout from "./pages/Layout";
import FindStays from './pages/FindStays'
import Hoteldetail from './pages/HotelDetails'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<FindStays />} />
            <Route path='login' element={<Login />}></Route>
            {/* <Route path="hotel-listing" element={<HotelListing />} /> */}
            <Route path="hotel-details" element={<Hoteldetail />} />
          </Route>
        </Routes>

        {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}

        {/* <Routes>
          <Route path='/' element={<Stays />} />
          <Route path='/search-results' element={<HotelListing />} />
          <Route path='/login' element={<Login />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
};

export default App;