import React from "react";
import "./process.scss";

function Process() {
  return (
    <section className="process-container flex-container">
      <div className="central-layout flex-container">
        <div className="column-container process-header">
        <div className="flex-vertical-center">
          <div className="icon"></div>
          <h3 className="point font-800">PROCESS</h3>
        </div>
        <p className="title-of-point font-900">
          By the same illusion which lifts the horizon.
        </p>
        <div className="column-container">
          <p className="area-text">
            By the same illusion which lifts the horizon of the sea to the level
            of the spectator on a hillside,
          </p>
          <p className="area-text">
            the sable cloud beneath was dished out, and the car seemed to float
            in the middle of an immense dark sphere, whose upper half was strewn
            with silver.
          </p>
        </div>
      </div>
      <div className="steps-container grid-container">
        <div className="column-container first-column">
          <div className="column-container card first-card">
            <span className="card-number font-900 first-number">1</span>
            <p className="card-text">
              By the same illusion which lifts the horizon of the sea to the
              level of the spectator on a hillside.
            </p>
          </div>
          <div className="column-container card third-card">
            <span className="card-number font-900 third-number">3</span>
            <p className="card-text">
              By the same illusion which lifts the horizon of the sea to the
              level of the spectator on a hillside.
            </p>
          </div>
        </div>
        <div className="column-container second-column">
          <div className="column-container card second-card">
            <span className="card-number font-900 second-number">2</span>
            <p className="card-text">
              By the same illusion which lifts the horizon of the sea to the
              level of the spectator on a hillside.
            </p>
          </div>
          <div className="column-container card fourth-card">
            <span className="card-number font-900 fourth-number">4</span>
            <p className="card-text">
              By the same illusion which lifts the horizon of the sea to the
              level of the spectator on a hillside.
            </p>
          </div>
        </div>
      </div>
      </div>
      
    </section>
  );
}

export default Process;
