import React, { useState } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header({ cinemaData }) {
  const [searchString, setSearchString] = useState('');

  let filteredMovies = [];

  // Check if cinemaData is available and the searchString is not empty
  if (cinemaData && cinemaData.cinema && searchString) {
    filteredMovies = cinemaData.cinema.movies.filter(movie =>
      movie.title.toLowerCase().includes(searchString)
    );
  }

  return (
    <header className="header">
      <nav>
        <ul>
          <li className="nav-item">
            <Link to="/" className="header-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/booking" className="header-link">
              Booking
            </Link>
          </li>
          <li className="item-input">
            <input
              placeholder="Search book title"
              type="text"
              name="search"
              onInput={e => setSearchString(e.target.value)}
              value={searchString}
            />
            {filteredMovies.length > 0 && (
              <div className="movieList">
                {filteredMovies.slice(0, 4).map(movie => (
                  <div className="movieCard" key={movie.title}>
                    <div>Title: {movie.title}</div>
                    <img src={movie.image} alt="" width="50px" />
                    <p>{movie.description}</p>
                    <a className="book-now" href="booking">
                      <button className="book-now">Book</button>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
