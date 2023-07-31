import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Hotels from './components/Hotels';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<><Hotels /></>} />
        <Route path='/filter' element={<><Filter /></>} />
      </Routes>
    </div>
  );
};

export default App;