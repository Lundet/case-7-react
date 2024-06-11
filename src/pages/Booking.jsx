
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/Booking.css';

function Booking({ cinemaData, loading, error }) {
  const { movieTitle } = useParams();

  const [bookedSeats, setBookedSeats] = useState([]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const selectedMovie = cinemaData.cinema.movies.find((movie) => movie.title === movieTitle);
  console.log(bookedSeats)
  return (
    <div>
      <div className="centered-content">
        <h1>{selectedMovie.title}</h1>
        <img src={selectedMovie.image} alt={selectedMovie.title} width="300px" />
        <p>Description: {selectedMovie.description}</p>
        <p>Duration: {selectedMovie.duration}</p>
      </div>

      <h2>Shows</h2>
      <ul>
        {selectedMovie.shows.map((show, showIndex) => (
          <li className='room' key={showIndex}>
            <h3>{show.room}</h3>
            <p>Time: {show.time}</p>
            <div className="seat-map">
              {show.seats.map((seat) => (
                <span
                  onClick={() => !seat.booked ? setBookedSeats([...bookedSeats, seat.seatNumber]) : ""}
                  key={seat.seatNumber}
                  className={`seat ${seat.booked ? 'booked' : 'available'}`}
                  
                >
                  {seat.seatNumber}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => alert("you have booked seat numbers: " + bookedSeats + " for the show: " + movieTitle)}>Confirm booking
        </button>
      </div>
      <h2>Other Movies</h2>
      <ul>
        {cinemaData.cinema.movies
          .filter((movie) => movie.title !== selectedMovie.title)
          .map((movie, movieIndex) => (
            <li key={movieIndex}>
              <img src={movie.image} alt="" width="150px" />
              <p>Title: {movie.title}</p>
              <p>Duration: {movie.duration}</p>
              {movie.shows.map((show, showIndex) => (
                <div key={showIndex}>
                  <p>Room: {show.room}</p>
                  <p>Time: {show.time}</p>
                  {/* Use Link to pass movie data to Booking */}
                  <Link to={`/booking/${encodeURIComponent(movie.title)}`}>
                    <button className='read-more'>Read more</button>
                  </Link>
                </div>
              ))}
            </li>
          ))}
      </ul>

      <Footer />
    </div>
  );
}

export default Booking;
