import '../styles/Header.css';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';




function Header() {

  const [searchString, setSearchString] = useState('');
  // state to track if application is loading
  const [loading, setLoading] = useState(true);

  // state to track any error message
  const [error, setError] = useState(null);

  const [cinemaData, setCinemaData] = useState([]);
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

  // check if loading, if true then we should display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // check if there is an error, if true then we should display it
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredMovies = cinemaData.cinema.movies.filter(movie => movie.title.toLowerCase().includes(searchString))
  return (
    <header className="header">
  <nav>
    <ul>
      <li className="nav-item">
        <Link to="/" className="header-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/booking" className="header-link">Booking</Link>
      </li>
      <li className="item-input">
        <input placeholder='Search book title' type="text" name='search' onInput={e => setSearchString(e.target.value)} value={searchString} />
        <div className='movieList'>
      {filteredMovies.map(movie => (
        <div className='movieCard' key={movie.title}>
          <div>Title: {movie.title}</div>
          <img src={movie.image} alt="" width="50px" />
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
      </li>
    </ul>
    
  </nav>
</header>

  
  );
}

export default Header;