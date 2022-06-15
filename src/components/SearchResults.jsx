import React, { useState } from "react";
import Row from "./Row";
import CustomerProfile from "./CustomerProfile";

function SearchResults(prop) {
  const [customerId, setCustomerId] = useState(0);
  return (
    <div>
      <table className="table">
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
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {prop.results.map(data => {
            return <Row key={data.id} customerId={setCustomerId} data={data} />;
          })}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </div>
  );
}

export default SearchResults;
