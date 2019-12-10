import React from 'react';
import './Advantages.css';
import Shipping from '../../img/shipping.svg';
import Refund from '../../img/refund.svg';
import Support from '../../img/support.svg';

function Advantages() {
    return (
        <section className="advantages">
            <div className="advantages-item">
                <img src={Shipping} alt="free shipping"/>
                    <div className="advantages-title">Free shipping</div>
                    <p className="advantages-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
        </div>
                <div className="advantages-item">
                    <img src={Refund} alt="100% refund"/>
                        <div className="advantages-title">100% refund</div>
                        <p className="advantages-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
        </div>
                    <div className="advantages-item">
                        <img src={Support} alt="support 24/7"/>
                            <div className="advantages-title">Support 24/7</div>
                            <p className="advantages-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
        </div>
    </section>
                    );
            }
            
export default Advantages;