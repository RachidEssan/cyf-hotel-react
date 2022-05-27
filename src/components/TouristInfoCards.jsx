import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <div className="card">
        <img
          alt=""
          src="https://images.pexels.com/photos/3061345/pexels-photo-3061345.jpeg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Glasgow</h1>
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go to Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          alt=""
          src="https://images.pexels.com/photos/5212814/pexels-photo-5212814.jpeg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Manchester</h1>
          <a href="visitmanchester.com" className="btn btn-primary">
            Go to Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          alt=""
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>London</h1>
          <a href="visitlondon.com" className="btn btn-primary">
            Go to London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
