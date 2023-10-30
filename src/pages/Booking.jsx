import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Booking({ cinemaData, loading, error }) {
  const { movieTitle } = useParams(); // Get the movieTitle from the URL parameters

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Filter the selected movie based on the title
  const selectedMovie = cinemaData.cinema.movies.filter((movie) => movie.title === movieTitle)[0];

  return (
    <div>
    <div className="centered-content"> {/* Add a div with a class */}
      <h1>{selectedMovie.title}</h1>
      <img src={selectedMovie.image} alt={selectedMovie.title} width="300px" />
      <p>Description: {selectedMovie.description}</p>
      <p>Duration: {selectedMovie.duration}</p>
    </div>

      <h2>Other Movies</h2>
      <ul>
        {cinemaData.cinema.movies
          .filter((movie) => movie.title !== selectedMovie.title) // Filter out the selected movie
          .map((movie, movieIndex) => (
            <li key={movieIndex}>
              <img src={movie.image} alt={movie.title} width="150px" />
              <p>Title: {movie.title}</p>
              <p>Duration: {movie.duration}</p>
              {movie.shows.map((show, showIndex) => (
                <div key={showIndex}>
                  <p>Room: {show.room}</p>
                  <p>Time: {show.time}</p>
                  <Link to={`/booking/${encodeURIComponent(movie.title)}`}>
                    <button className='read-more'>Read more</button>
                  </Link>
                </div>
              ))}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Booking;
