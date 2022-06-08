import React, { useState } from "react";
import moment from "moment";

const Row = ({ data }) => {
  let checkIn = moment(data.checkInDate);
  let checkOut = moment(data.checkOutDate);
  const [highlighted, sethighlighted] = useState(false);
  const highlightRow = () => {
    sethighlighted(!highlighted);
  };

  return (
    <tr className={highlighted ? "highlight" : ""} onClick={highlightRow}>
      <th>{data.id}</th>
      <th>{data.title}</th>
      <th>{data.firstName}</th>
      <th>{data.surname}</th>
      <th>{data.email}</th>
      <th>{data.roomId}</th>
      <th>{data.checkInDate}</th>
      <th>{data.checkOutDate}</th>
      <th>{checkOut.diff(checkIn, "days")}</th>
      <th>
        <button className="btn btn-primary" onClick={data.customerId()}>
          Show profile
        </button>
      </th>
    </tr>
  );
};

export default Row;
