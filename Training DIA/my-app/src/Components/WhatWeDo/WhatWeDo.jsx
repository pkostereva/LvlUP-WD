import React, { Component } from "react";
import "./WhatWeDo.scss";

class WhatWeDo extends React.Component {
  render() {
    const data = [
      { 
        areaTitle: "By the same illusion which lifts the horizon(1).",
        areaText:
          "By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside."
      },
      {
        areaTitle: "By the same illusion which lifts the horizon(2).",
        areaText:
          "By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside."
      },
      {
        areaTitle: "By the same illusion which lifts the horizon(3).",
        areaText:
          "By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside."
      }
    ];
    return (
      <div className="central-layout">
        <section className="what-we-do">
        <h2>What we do</h2>
        <div className="flex-container work-areas-column">
          {data.map((el, index) => 
            <div className={`area-${index+1} column-container`}>
              <div className="unique-gradient"></div>
              <p className="area-title font-900">
                {el.areaTitle}
              </p>
              <p className="area-text">
                {el.areaText}
              </p>
            </div>
          )}
        </div>
      </section>
      </div>
      
    );
  }
}


export default WhatWeDo;
