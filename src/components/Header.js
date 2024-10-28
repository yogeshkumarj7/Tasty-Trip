import TRIP from "../../images/TRIP.png";

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

export default Header;
