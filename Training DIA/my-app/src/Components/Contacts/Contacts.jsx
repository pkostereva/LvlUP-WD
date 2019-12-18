import React from 'react';
import './contacts.scss';
import twitterIcon from '../../img/twitter-icon.svg';
import instagramIcon from '../../img/instagram-icon.svg';
import facebookIcon from '../../img/facebook-icon.svg';


function Contacts() {
    return (
        <section className="contacts-container flex-container container">
        <div className="form-container column-container">
            <div className="menu-point-container">
                <div className="flex-vertical-center">
                    <div className="icon"></div>
                    <h3 className="point font-800">SEND US A MESSAGE</h3>
                </div>
            </div>
            <form action="#">
                <li className="form-row">
                    <label className="font-bold" for="email">Your email</label>
                    <input type="text" id="email"/>
                </li>
                <li className="form-row">
                    <label className="font-bold" for="name">Your name</label>
                    <input type="text" id="name"/>
                </li>
                <li className="form-row">
                    <label className="font-bold" for="message">Your message</label>
                    <input type="text" id="message"/>
                </li>
                <button className="apply-button">Send</button>
            </form>
        </div>
        <div className="contact-us-container column-container">
            <div className="menu-point-container">
                <div className="flex-vertical-center">
                    <div className="icon"></div>
                    <h3 className="point font-800">CONTACT US</h3>
                </div>
                <p className="title-of-point font-900">
                    By the same illusion which lifts the horizon.
                </p>
            </div>
            <div className="contact-container column-container">
                <span className="title font-800">call us</span>
                <span className="contact font-900">654 321 987</span>
            </div>
            <div className="contact-container column-container">
                <span className="title font-800">visit us</span>
                <span className="contact font-900">2905 West Drive, Buffalo Grove</span>
            </div>
            <div className="social-icons-container flex-vertical-center">
                <img src={twitterIcon} alt="" className="icons"/>
                <img src={instagramIcon} alt="" className="icons"/>
                <img src={facebookIcon} alt="" className="icons"/>
            </div>
            </div>
        </section>
    );
}

export default Contacts;