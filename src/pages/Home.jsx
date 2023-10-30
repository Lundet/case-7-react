import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Footer from '../components/Footer';

function Home({ cinemaData, loading, error }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <main>
        <h1>{cinemaData.cinema.name}</h1>
        <h2>Movies Right Now</h2>
        <ul>
          {cinemaData.cinema.movies.map((movie, movieIndex) => (
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
      </main>
      <Footer />
    </div>
  );
}

export default Home;
