import React from "react";
import "./features.scss";

function Features() {
  return (
    <section className="features-container">
      <div className="central-layout feature-column">
        <div className="column-container">
          <div className="flex-vertical-center">
            <div className="icon"></div>
            <h3 className="point font-800">FEATURES</h3>
          </div>
          <p className="title-of-point font-900">
            By the same illusion which lifts the horizon.
          </p>
          <div className="column-container features-points">
            <div className="flex-vertical-center feature-point">
              <div className="first-feature-icon"></div>
              <p className="feature-text">
                By the same illusion which lifts the horizon of the sea to the
                level of the spectator on a hillside, the sable cloud beneath
                was dished out.
              </p>
            </div>
            <div className="flex-vertical-center feature-point">
              <div className="second-feature-icon"></div>
              <p className="feature-text">
                By the same illusion which lifts the horizon of the sea to the
                level of the spectator on a hillside, the sable cloud beneath
                was dished out.
              </p>
            </div>
            <div className="flex-vertical-center feature-point">
              <div className="third-feature-icon"></div>
              <p className="feature-text">
                By the same illusion which lifts the horizon of the sea to the
                level of the spectator on a hillside, the sable cloud beneath
                was dished out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
