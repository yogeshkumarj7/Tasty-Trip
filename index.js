import React from "react";
import ReactDOM from "react-dom/client";
import TRIP from "./images/TRIP.png";

// HEADER.............
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={TRIP} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="list">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// BODY.............

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <h3>Maithili Foods</h3>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="Search"></div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

// APP..............
const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
