import React, { useState } from "react";
import moment from "moment";

const Row = props => {
  let checkIn = moment(props.data.checkInDate);
  let checkOut = moment(props.data.checkOutDate);
  const [highlighted, sethighlighted] = useState(false);
  const highlightRow = () => {
    sethighlighted(!highlighted);
  };

  return (
    <tr className={highlighted ? "highlight" : ""} onClick={highlightRow}>
      <th>{props.data.id}</th>
      <th>{props.data.title}</th>
      <th>{props.data.firstName}</th>
      <th>{props.data.surname}</th>
      <th>{props.data.email}</th>
      <th>{props.data.roomId}</th>
      <th>{props.data.checkInDate}</th>
      <th>{props.data.checkOutDate}</th>
      <th>{checkOut.diff(checkIn, "days")}</th>
      <th>
        <button
          className="btn btn-primary"
          onClick={props.customerId(props.data.id)}
        >
          Show Profile
        </button>
      </th>
    </tr>
  );
};

export default Row;
