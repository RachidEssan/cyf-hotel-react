import React from "react";
import moment from "moment";

function SearchResults(prop) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Firstname</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Number of Nights</th>
        </tr>
      </thead>
      <tbody>
        {prop.results.map(data => {
          let checkIn = moment(data.checkInDate);
          let checkOut = moment(data.checkOutDate);
          return (
            <tr>
              <th>{data.id}</th>
              <th>{data.title}</th>
              <th>{data.firstName}</th>
              <th>{data.surname}</th>
              <th>{data.email}</th>
              <th>{data.roomId}</th>
              <th>{data.checkInDate}</th>
              <th>{data.checkOutDate}</th>
              <th>{checkOut.diff(checkIn, "days")}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
