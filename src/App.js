import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking'; 



function App() {
  return (
    <Router>
      <div> 
        <Routes>         
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking/>} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
