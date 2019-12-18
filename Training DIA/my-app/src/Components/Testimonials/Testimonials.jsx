import React, { Component } from "react";
import "./Testimonials.scss";

class Testimonials extends React.Component {
  render() {
    const data = [
      {
        cardTestimonial: "“By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.”(1).",
        authorName: "John Wayne-1",
        authorPosition: "CEO-1"
      },
      {
        cardTestimonial: "“By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.”(2).",
        authorName: "John Wayne-2",
        authorPosition: "CEO-2"
      },
      {
        cardTestimonial: "“By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.”(3).",
        authorName: "John Wayne-3",
        authorPosition: "CEO-3"
      }
    ];
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
            {data.map((el, index) => (
              <div className={`card-${index + 1} column-container card`}>
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
