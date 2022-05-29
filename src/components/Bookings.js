import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = searchVal => {
    const filteredbookings = bookings.filter(
      client =>
        client.firstName.toLowerCase().includes(searchVal) ||
        client.surname.toLowerCase().includes(searchVal)
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
      <div className="container">
        <Search search={search} />
        {<SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
