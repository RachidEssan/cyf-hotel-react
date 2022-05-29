import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import FakeBookings from "../data/fakeBookings";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(response => setBookings(response));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search
          search={searchVal => {
            console.info("TO DO!", searchVal);
          }}
        />
        {<SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
