import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [customerData, setCustomerData] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(response => setCustomerData(response));
  }, [id]);

  return (
    <div>
      <ul>
        <li>{`Customer id: ${customerData.id}`}</li>
        <li>{`Name: ${customerData.firstName}`}</li>
        <li>{`Email: ${customerData.email}`}</li>
        <li>{`Phone Number: ${customerData.phoneNumber}`}</li>
        <li>{`VIP: ${customerData.vip ? "Yes" : "No"}`}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
