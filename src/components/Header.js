import Logo from "../../assets/orange.png";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const status = useOnlineStatus();
  const { loggedinUser } = useContext(userContext);

  changeBtnName = () => {
    setbtnName((prevState) => (prevState === "Login" ? "Logout" : "Login"));
  };

  // read the cart slice using selector

  const cartItems = useSelector((store) => store.cart.items); // store point to appstore

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
          <li className="font-bold text-xl">
            <Link to="/cart">
              Cart {cartItems.length ? `- ${cartItems.length} items` : ""}
            </Link>
          </li>
          <button className="login-btn" onClick={changeBtnName}>
            {btnName}
          </button>
          <li>{loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
