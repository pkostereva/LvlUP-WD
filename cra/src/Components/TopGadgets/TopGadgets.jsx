import React from 'react';
import './TopGadgets.css';
import PicSmall from '../../img/pic_small.svg';
import Oculus from '../../img/Oculus-Rift-profile_grande.svg';
import GoPro from '../../img/GoPro-Hero-6.svg';

function TopGadgets() {
    return (
        <section className="top-gadgets">
        <a href="#" className="offer-card">
            <div className="card-title">iPhone 6</div>
            <div className="card-text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</div>
            <div className="price">$399</div>
            <img className="card-image" src={PicSmall} alt="iPhone 6"/>
        </a>
        <a href="#" className="offer-card">
            <img className="card-image" src={Oculus} alt="Oculus-Rift-profile_grande"/>
            <span className="card-title">Oculus Rift</span>
            <span className="price">$349</span>
        </a>
        <a href="#" className="offer-card">
            <div className="card-title">iPhone 6</div>
            <div className="card-text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</div>
            <div className="price">$299</div>
            <img className="card-image" src={GoPro} alt="GoPro-Hero-6"/>
        </a>
    </section>
            );
}
          
export default TopGadgets;