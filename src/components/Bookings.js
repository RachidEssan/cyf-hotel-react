import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = searchVal => {
    const filteredbookings = bookings.filter(
      client =>
        client.firstName.includes(searchVal) ||
        client.surname.includes(searchVal)
    );
    setBookings(filteredbookings);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(response => setBookings(response));
  }, []);

  return (
    <div className="App-content">
      {bookings.length > 0 ? (
        <div className="container">
          <Search search={search} />
          {<SearchResults results={bookings} />}
        </div>
      ) : null}
    </div>
  );
};

export default Bookings;
