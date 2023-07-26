import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Stays from "./pages/FindStays"

const App = () => {
  return (
    <div><h1>
      content
    </h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stays' element={<Stays />} />
      </Routes>
    </div>
  );
};

export default App;