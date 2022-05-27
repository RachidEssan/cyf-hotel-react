import React from "react";
import Order from "./Order";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  return (
    <div className="container">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
