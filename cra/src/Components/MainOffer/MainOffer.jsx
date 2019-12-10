import React from 'react';
import './MainOffer.css';
import IPhone6DD from '../../img/iPhone6s_discover_desktop_08_iOS9.svg';

function MainOffer() {
    return (
        <section className="main-offer">
        <div className="offer-description">
            <div className="offer-title">iPhone 6 Plus</div>
            <div className="offer-text">Perfomance and design. Taken right to the edge.</div>
            <a href="#" className="offer-link">SHOP NOW</a>
        </div>
        <img className="offer-image" src={IPhone6DD} alt="iPhone6s"/>
    </section>
        );
}

export default MainOffer;