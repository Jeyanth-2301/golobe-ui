import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Stays from "./pages/FindStays"
import Signup from "./pages/Signup"


const App = () => {
  return (
    <div><h1>
      content
    </h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stays' element={<Stays />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;