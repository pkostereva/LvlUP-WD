import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "../Intro/intro.scss";
import "./Header.scss";

function Header() {
  return (
    <Router>
      <div className="central-layout">
        <header className="flex-vertical-center">
          <div className="logo font-bold">Dia</div>
          <div className="flex-vertical-center nav-and-hire">
            <nav className="flex-container top-menu">
              <a href="/" className="top-menu-link font-bold">
                Home
              </a>
              <a href="/about-us" className="top-menu-link font-bold">
                About Us
              </a>
              <a href="/services" className="top-menu-link font-bold">
                Services
              </a>
              <a href="/work" className="top-menu-link font-bold">
                Work
              </a>
              <a href="/contact-us" className="top-menu-link font-bold">
                Contact Us
              </a>
              <div className="hire-us top-menu-link font-bold">Hire us</div>
            </nav>
          </div>
        </header>
        <Switch>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="main-block central-layout">
        <h1 className="main-title font-900">Global digital agency</h1>
        <p className="main-text">
          By the same illusion which lifts the horizon of the sea to the level
          of the spectator on a hillside, the sable cloud beneath.
        </p>
        <button type="button" className="learn-more">
          Learn more
        </button>
      </div>
  );
}

function About() {
  return (
    <div className="main-block central-layout">
        <h1 className="main-title font-900">About agency</h1>
        <p className="main-text">
          By the same illusion which lifts the horizon of the sea to the level
          of the spectator on a hillside, the sable cloud beneath.
        </p>
        <button type="button" className="learn-more">
          Learn more
        </button>
      </div>
  );
}

function Services() {
  return (
    <div className="main-block central-layout">
        <h1 className="main-title font-900">Services</h1>
        <p className="main-text">
          By the same illusion which lifts the horizon of the sea to the level
          of the spectator on a hillside, the sable cloud beneath.
        </p>
        <button type="button" className="learn-more">
          Learn more
        </button>
      </div>
  );
}

function Work() {
  return (
    <div className="main-block central-layout">
        <h1 className="main-title font-900">Our works</h1>
        <p className="main-text">
          By the same illusion which lifts the horizon of the sea to the level
          of the spectator on a hillside, the sable cloud beneath.
        </p>
        <button type="button" className="learn-more">
          Learn more
        </button>
      </div>
  );
}

function ContactUs() {
  return (
    <div className="main-block central-layout">
        <h1 className="main-title font-900">Contact Us</h1>
        <p className="main-text">
          By the same illusion which lifts the horizon of the sea to the level
          of the spectator on a hillside, the sable cloud beneath.
        </p>
        <button type="button" className="learn-more">
          Learn more
        </button>
      </div>
  );
}

export default Header;
