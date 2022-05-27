import React from "react";
import Order from "./Order";
import RestaurantButton from "./RestaurantButton";

const Restaurant = prop => {
  return (
    <div className="container">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizza" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
