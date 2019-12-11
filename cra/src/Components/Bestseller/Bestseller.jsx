import React, { Component } from 'react';
import './Bestseller.css';
import MacBook from '../../img/macbook-pro.svg';

class Bestseller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: []
        }
    }

    componentWillMount() {
        fetch('/api/getGoods')
            .then(response => response.json())
            .then(data => this.setState({ goods: data }));
    }

    render() {
        const { goods } = this.state;
        return (
            <section className="bestseller">
                <h2>Best seller</h2>

                <nav className="nav nav_bestseller">
                    <a href="#" className="nav-link active">All</a>
                    <a href="#" className="nav-link">Mac</a>
                    <a href="#" className="nav-link">iPhone</a>
                    <a href="#" className="nav-link">iPad</a>
                    <a href="#" className="nav-link">iPod</a>
                    <a href="#" className="nav-link">Accessories</a>
                </nav>

                <div className="products" id="product-cards-holder">
                    {
                        goods.map(good =>
                            <div className="product-card">
                                <span className="hot-icon">hot</span>
                                <img className="product-image" src={MacBook} alt="macbook-pro" />
                                <div className="product-controls">
                                    <button className="like"></button>
                                    <button className="add-to-cart"></button>
                                </div>
                                <div className="product-title">{good.name}</div>
                                <div className="product-rating">
                                    rating: {good.rating}
                                    {/* <span className="star active"></span>
                                    <span className="star active"></span>
                                    <span className="star active"></span>
                                    <span className="star active"></span>
                                    <span className="star"></span> */}
                                </div>
                                <div className="product-price">
                                    <span className="new-price">${good.price}</span>
                                    <span className="old-price">$599</span>
                                </div>
                            </div>
                        )
                    }
                </div>


                <a className="load-link" onclick="loadData()">Load more</a>
            </section>
        )
    }
}

export default Bestseller;