import React, { Component } from "react";
import "./Testimonials.scss";

class Testimonials extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      testm: []
    };
  }

  componentWillMount() {
    fetch("/api/getTestimotionals")
      .then(response => response.json())
      .then(res => {
        this.setState({ testm: res });
      });
  }


  render() {
    const { testm } = this.state;

    return (
      <section className="column-container testimonials-container">
        <div className="central-layout">
          <div className="menu-point-container">
            <div className="flex-vertical-center">
              <div className="icon"></div>
              <h3 className="point font-800">TESTIMONIALS</h3>
            </div>
            <p className="title-of-point font-900">
              By the same illusion which lifts the horizon.
            </p>
          </div>
          <div className="flex-container testimonials-cards-container container">
            {testm.map((el, index) => (
              <div key={index} className={`card-${index + 1} column-container card`}>
                <div className="card-photo"></div>
                <p className="card-testimonial">{el.cardTestimonial}</p>
                <div className="hr"></div>
                <span className="author-name font-bold">{el.authorName}</span>
                <span className="author-position font-800">
                  {el.authorPosition}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
