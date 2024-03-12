import "./Navbar.css";
import "./MobileResponsiveNav.css";
import { React, useRef, useState } from "react";
// import './MobileResponsiveNav.css'
import { BsList } from "react-icons/bs";

function Navbar({ logo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navRef = useRef();

  return (
    <>
      <div className="navbar">
        <div className="innernav">
          <div className="logodiv">
            <img id="logo" src={logo} alt="" />
          </div>
          <div className="MenuIcon">
            <BsList
              id="hamburger"
              className="hamburger"
              onClick={handleMenuToggle}
            />
          </div>
          <div className={`NavOption MenuToggle ${isMenuOpen ? "" : "hidden"}`}>
            <ul className="NavLinks">
              <li>
                <a href="/#">Home</a>
              </li>
              <li>
                <a href="/#">English</a>
              </li>
              <li>
                <a href="/#">Become A seller</a>
              </li>
              <li>
                <a href="/#">Sign In</a>
              </li>
            </ul>
            <div className="btnbox btnboxmob">
              <button className="btn">Signup</button> 
              <button className="btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Navbar };
