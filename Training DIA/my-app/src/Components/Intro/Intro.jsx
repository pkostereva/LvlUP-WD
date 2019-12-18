import React from "react";
import "./intro.scss";
import mainpic from "../../img/main-pic.svg";

function Intro() {
  return (
    <>
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
      <div className="central-layout flex-container main-picture-and-socials ">
        <div className="nav-button"></div>
        <img src={mainpic} className="main-pic" alt="main-pic" />
        <div className="flex-container social-links-container">
          <a href="#" className="social-link font-800">
            facebook
          </a>
          <a href="#" className="social-link font-800">
            twitter
          </a>
          <a href="#" className="social-link font-800">
            instagram
          </a>
        </div>
        <div className="column-container point-and-text-container">
          <h3 className="point font-800">INTRO</h3>
          <p className="text-point font-800">
            By the same illusion which lifts the horizon.
          </p>
        </div>
      </div>
    </>
  );
}

export default Intro;
