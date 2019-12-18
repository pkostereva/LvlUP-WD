import React, { Component } from "react";
import "./WhatWeDo.scss";

class WhatWeDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    fetch("/api/getWhatWeDo")
      .then(response => response.json())
      .then(res => {
        this.setState({ data: res });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="central-layout">
        <section className="what-we-do">
          <h2>What we do</h2>
          <div className="flex-container work-areas-column">
            {data.map((el, index) => (
              <div key={index} className={`area-${index + 1} column-container`}>
                <div className="unique-gradient"></div>
                <p className="area-title font-900">{el.areaTitle}</p>
                <p className="area-text">{el.areaText}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default WhatWeDo;
