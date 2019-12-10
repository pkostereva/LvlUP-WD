import React from 'react';
import './TopPromo.css';
import Group1 from '../../img/Mask Group 1.svg';

function TopPromo() {
    return (
        <section className="slider">
            <div className="slide-description">
                <div className="slide-title">iPhone X</div>
                <div className="slide-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy.</div>
                <a href="#" className="slide-link">MORE</a>
            </div>
            <img src={Group1} alt=""/>
        </section>
            );
}
          
export default TopPromo;