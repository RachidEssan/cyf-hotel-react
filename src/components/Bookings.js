import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const search = searchVal => {
    const filteredbookings = bookings.filter(
      client =>
        client.firstName.includes(searchVal) ||
        client.surname.includes(searchVal)
    );
    setBookings(filteredbookings);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => {
        if (response.status != 200) {
          alert("Error! Unable to load data.");
        }
        return response.json();
      })
      .then(response => {
        setBookings(response);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!loading ? (
          <SearchResults results={bookings} />
        ) : (
          <h3 className="loading-message">Loading... Please wait.</h3>
        )}
      </div>
    </div>
  );
};

export default Bookings;
