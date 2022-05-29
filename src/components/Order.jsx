import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = prop => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li className="orders">
      {prop.orderType}: {orders} <RestaurantButton addOne={orderOne} />
    </li>
  );
};

export default Order;
