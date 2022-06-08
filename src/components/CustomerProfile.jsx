import React from "react";

const CustomerProfile = ({ id }) => {
  return <div>{id ? `Customer ${id} profile}` : ""}</div>;
};

export default CustomerProfile;
