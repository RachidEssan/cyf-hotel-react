import React from "react";
import Row from "./Row";

function SearchResults(prop) {
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
          </tr>
        </thead>
        <tbody>
          {prop.results.map(data => {
            return <Row data={data} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
