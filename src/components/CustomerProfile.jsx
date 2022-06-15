import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [customerData, setCustomerData] = useState(null);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(response => setCustomerData(response));
  }, [id]);

  return (
    <div>
      {id && customerData
        ? `Customer profile number ${customerData.id} Email: ${
            customerData.email
          } Phone number: ${customerData.phoneNumber} VIP: ${customerData.vip}`
        : ""}
    </div>
  );
};

export default CustomerProfile;
