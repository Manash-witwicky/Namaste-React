import Logo from "../../assets/orange.png";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  changeBtnName = () => {
    setbtnName((prevState) => (prevState === "Login" ? "Logout" : "Login"));
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
        <button className="login-btn" onClick={changeBtnName}>
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
