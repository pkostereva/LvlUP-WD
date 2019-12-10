import React from 'react';
import './Footer.css';
import LogoFooter from '../../img/logo-footer.svg';
import FB from '../../img/facebook.svg';
import TW from '../../img/twitter.svg';
import WU from '../../img/Western-union.svg';
import MC from '../../img/master-card.svg';
import PP from '../../img/Paypal.svg';
import Visa from '../../img/visa.svg';

function Footer() {
    return (
        <footer className="grid">
            <div className="block-one">
                <img src={LogoFooter} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </div>
            <div className="block-two">
                <b>Follow Us</b>
                <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                <a className="social" href="#"><img src={FB} alt="facebook" /></a>
                <a className="social" href="#"><img src={TW} alt="twitter" /></a>
            </div>
            <div className="block-three">
                <b>Contact Us</b>
                <p>My Company , 4578 Marmora Road, Glasgow D04 89GR<br />
                    Call us now: 0123-456-789<br />
                    Email: support@whatever.com</p>
            </div>

            <div className="links">
                <b>Infomation</b>
                <a href="#">About Us</a>
                <a href="#">Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Condition</a>
            </div>

            <div className="links">
                <b>Service</b>
                <a href="#">About Us</a>
                <a href="#">Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Condition</a>
            </div>

            <div className="links">
                <b>Extras</b>
                <a href="#">About Us</a>
                <a href="#">Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Condition</a>
            </div>

            <div className="links">
                <b>My Account</b>
                <a href="#">About Us</a>
                <a href="#">Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Condition</a>
            </div>

            <div className="links">
                <b>Userful Links</b>
                <a href="#">About Us</a>
                <a href="#">Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Condition</a>
            </div>

            <div className="links">
                <b>Our Offers</b>
                <a href="#">About Us</a>
                <a href="#">Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Condition</a>
            </div>

            <div className="bottom-line flex-container">
                <span className="copy">© 2018 Ecommerce theme by www.bisenbaev.com</span>
                <div className="payments">
                    <img src={WU} alt="western-union" />
                    <img src={MC} alt="master-card" />
                    <img src={PP} alt="paypal" />
                    <img src={Visa} alt="visa" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;