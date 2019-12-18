import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="central-layout">
      <header className="flex-vertical-center">
        <div className="logo font-bold">Dia</div>
        <div className="flex-vertical-center nav-and-hire">
          <nav className="flex-container top-menu">
            <a href="#" className="top-menu-link font-bold">
              Home
            </a>
            <a href="#" className="top-menu-link font-bold">
              About Us
            </a>
            <a href="#" className="top-menu-link font-bold">
              Services
            </a>
            <a href="#" className="top-menu-link font-bold">
              Work
            </a>
            <a href="#" className="top-menu-link font-bold">
              Contact Us
            </a>
            <div className="hire-us top-menu-link font-bold">Hire us</div>
          </nav>
          
        </div>
      </header>
    </div>
  );
}

export default Header;
