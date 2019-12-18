import React from 'react';
import './Footer.scss';


function Footer() {
    return (
        <section class="footer flex-vertical-center container">
        <div class="design">Design by @mariuszdaniel</div>
        <nav class='flex-vertical-center'>
            <a href="#" className="footer-nav-link font-bold">Home</a>
            <a href="#" className="footer-nav-link font-bold">About us</a>
            <a href="#" className="footer-nav-link font-bold">Services</a>
            <a href="#" className="footer-nav-link font-bold">Work</a>
            <a href="#" className="footer-nav-link font-bold">Contact Us</a>
        </nav>
    </section>
    );
}

export default Footer;