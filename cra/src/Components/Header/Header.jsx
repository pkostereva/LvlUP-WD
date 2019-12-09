import React from 'react';
import './Header.css';
import SearchLogo from './search-icon.svg';
import Logo from './../../img/logo.svg';

function Header() {
  return (
    <header>
        <div className="topbar">
            <div className="controls-left">
                <span className="lang">EN</span>
                <span className="currency">USD</span>
            </div>
            <div className="controls-right">
                <a href="#" className="profile-link">
                    <img src="../../img/profile_close_2.svg" />
                    <span>My profile</span>
                </a>
                <div className="cart-controls">
                    <a href="#" className="cart-link">
                        <img src="../../img/bag_3.svg" />
                        <span>0 Items</span>
                    </a>
                    <span className="cart-total">$0.00</span>
                </div>
                <img src={SearchLogo} />
            </div>
        </div>
        <img className="logo" src={Logo} alt="" />
        <nav className="nav nav_main">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">Store</a>
            <a href="#" className="nav-link">iPhone</a>
            <a href="#" className="nav-link">iPad</a>
            <a href="#" className="nav-link">MacBook</a>
            <a href="#" className="nav-link">Accessories</a>
        </nav>
    </header>
  );
}

export default Header;
