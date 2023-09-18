import '../styles/Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/" className="header-link">Home</Link>
          </li>
          <li>
            <Link to="/booking" className="header-link">Booking</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;