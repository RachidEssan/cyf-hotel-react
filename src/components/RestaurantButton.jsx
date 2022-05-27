import React from "react";

const RestaurantButton = prop => {
  return (
    <button onClick={prop.addOne} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
