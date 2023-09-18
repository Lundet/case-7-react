
function ListSeatings(props) {

return (
    <div>
      <h3>Seats:</h3>
      <ul>
        {props.show.seats.map((seat, seatIndex) => (
          <li key={seatIndex}>Seat {seat.seatNumber}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListSeatings;