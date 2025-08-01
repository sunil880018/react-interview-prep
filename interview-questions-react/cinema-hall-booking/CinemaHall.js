import { useState, useEffect } from 'react';
import './styles.css';

const ROW = 10,
  COL = 10;

export default function CinemaHall() {
  const [seatDetails, setSeatDetails] = useState([]);

  useEffect(() => {
    initializeSeats();
  }, []);

  const initializeSeats = () => {
    const seats = Array.from({ length: ROW }, (_, rowIdx) => {
      const rowLetter = String.fromCharCode(65 + rowIdx);
      return Array.from({ length: COL }, (_, colIdx) => ({
        id: `${rowLetter}${colIdx}`,
        status: 0, // 0: available, 1: selected, 2: booked
      }));
    }).flat();
    setSeatDetails(seats);
  };

  const seatStatus = (label) => {
    setSeatDetails((prev) =>
      prev.map((seat) =>
        seat.id === label
          ? seat.status === 2
            ? seat // Do nothing if booked
            : { ...seat, status: seat.status === 1 ? 0 : 1 } // Toggle selection
          : seat
      )
    );
  };

  const resetAllSeats = () => {
    initializeSeats();
  };

  const clearAllSeats = () => {
    setSeatDetails((prev) =>
      prev.map((seat) =>
        seat.status === 1
          ? { ...seat, status: 0 } // selected → available
          : seat
      )
    );
  };

  const bookedSeat = () => {
    const hasSelectedSeat = seatDetails.some((seat) => seat.status === 1);

    if (!hasSelectedSeat) {
      window.alert('Please select at least one seat');
      return;
    }

    setSeatDetails((prev) =>
      prev.map((seat) =>
        seat.status === 1
          ? { ...seat, status: 2 } // selected → booked
          : seat
      )
    );
  };

  return (
    <div className="main-container">
      <h1>Cinema Hall</h1>

      <div className="button-section">
        <button data-testid="book-button" onClick={bookedSeat}>
          Book Seats
        </button>
        <button data-testid="clear-button" onClick={clearAllSeats}>
          Clear
        </button>
        <button data-testid="reset-button" onClick={resetAllSeats}>
          Reset
        </button>
      </div>

      <div className="cinema-hall" data-testid="cinema-hall">
        {Array.from({ length: ROW }, (_, rowIdx) => (
          <div className="row" key={rowIdx}>
            {Array.from({ length: COL }, (_, colIdx) => {
              const rowLetter = String.fromCharCode(65 + rowIdx);
              const label = `${rowLetter}${colIdx}`;
              const seat = seatDetails.find((s) => s.id === label);
              const status = seat?.status ?? 0;

              return (
                <div
                  key={label}
                  onClick={() => seatStatus(label)}
                  className={`seat ${
                    status === 1
                      ? 'selected-seat'
                      : status === 2
                      ? 'disabled-seat'
                      : ''
                  }`}
                  data-testid={`seat-${label}`}
                >
                  {label}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
