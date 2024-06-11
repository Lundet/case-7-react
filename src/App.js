import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Header from './components/Header';

function App() {
  const [cinemaData, setCinemaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('cinema.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCinemaData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <Header cinemaData={cinemaData} loading={loading} error={error} />
        <Routes>
          <Route
            path="/"
            element={<Home cinemaData={cinemaData} loading={loading} error={error} />}
          />
          <Route
            path="/booking/:movieTitle" // Use movieTitle as the parameter
            element={<Booking cinemaData={cinemaData} loading={loading} error={error} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
