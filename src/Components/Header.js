import React, { useState } from "react";
import "../Components/style.css";
import { Link } from "react-router-dom";
import logosvg from "../Logo/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import Hamburger from "./Hamburger";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    console.log("Toggle function called");
    setIsNavOpen(!isNavOpen);
  };

  console.log("Is nav open?", isNavOpen);

  return (
    <nav>
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <img src={logosvg} alt="logo" />
          </div>
          
          <div className={`nav ${isNavOpen ? "open" : ""}`}>
            
            <ul className="list">
              <Link to="/">Home</Link>
              <Link to="/about">About us</Link>
              <Link to="/team">Team</Link>
              <Link to="/reach">Reach us</Link>
              

              {/* Wrap services links in dropdown container */}
              <div className="services-dropdown">
                <span>Services</span>
                <div className="dropdown-content">
                  <Link to="/corporation">Corporation</Link>
                  <Link to="/corporate">Corporate Consultancy</Link>
                  <Link to="/bookkeeping">Bookkeeping & Accounting</Link>
                  <Link to="/taxation">Taxation</Link>
                  <Link to="/audit">Audit</Link>
                </div>

              </div>
            </ul>
          </div>
         
        </div>
        <div className="nav-toggle" onClick={toggleNav}>
            {isNavOpen ? <FaTimes /> : <FaBars />}
            {isNavOpen && <Hamburger />}
          </div>
        
      </div>
      
      <div className="headline-box">
        <span className="box-animation">
          <div>MORE THAN JUST ADVICE</div>
        </span>
      </div>
    </nav>
  );
}

export default Header;
