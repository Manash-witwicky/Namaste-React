import Logo from "../../assets/orange.png";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const status = useOnlineStatus();

  changeBtnName = () => {
    setbtnName((prevState) => (prevState === "Login" ? "Logout" : "Login"));
  };

  return (
    <div className="flex items-center justify-between shadow-xl">
      <div className="logo-container">
        <img src={Logo} className="w-44 h-25" />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 gap-6">
          <li>Status : {status ? "✅" : "🔴"}</li>
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
          <button className="login-btn" onClick={changeBtnName}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
