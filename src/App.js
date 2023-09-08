import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // state to store cinema data
  const [cinemaData, setCinemaData] = useState(null);

  // state to track if application is loading
  const [loading, setLoading] = useState(true);

  // state to track any error message
  const [error, setError] = useState(null);

  const listSeatings = (evt) => {
    return(
    <p>
      {show.seats.map((seat, seatIndex) => (
        <p key={seatIndex}>{seat.seatNumber}</p>
      ))}
    </p>
    )
  }


  // trigger the arrow function inside useEffect ONE time before loading
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

  return (
    <main>
      <h1>{cinemaData.cinema.name}</h1>
      <h2>Movies Right Now</h2>
      <ul>
        {cinemaData.cinema.movies.map((movie, movieIndex) => (
          <li key={movieIndex}>
            <img src={movie.image} alt="" width="150px" />
            <p>Title: {movie.title}</p>
            <p>Duration: {movie.duration}</p>
            <p>
              {movie.shows.map((show, showIndex) => (
                <p key={showIndex}>
                  <p>Room: {show.room}</p>
                  <p>Time: {show.time}</p>
                  {/* <p>
                    {show.seats.map((seat, seatIndex) => (
                      <p key={seatIndex}>{seat.seatNumber}</p>
                    ))}
                  </p> */}
                  <button className='book-now' onClick={(listSeatings) => (item)}>Book</button>
                </p>
              ))}
            </p>
          </li>
        ))}
      </ul>


    </main>
  );
}

export default App;