import React from 'react';
import './FeaturedProduct.css';
import Product1 from '../../img/product1.svg';
import Product2 from '../../img/product2.svg';
import Product3 from '../../img/product3.svg';

function FeaturedProduct() {
    return (
        <section className="featured-products">
            <h2>Featured products</h2>
            <div className="products">
                <div className="featured-product">
                    <img className="product-photo" src={Product1} alt="#" className="product1" />
                    <div className="product-description">
                        <h3 className="products-title">Beats Solo 2 On Ear Headphones - Black</h3>
                        <div className="products-rating">
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star"></span>
                        </div>
                        <div className="price">$499</div>
                    </div>
                </div>
                <div className="featured-product">
                    <img className="product-photo" src={Product2} alt="#" className="product2" />
                    <div className="product-description">
                        <h3 className="products-title">H-Squared tvTray</h3>
                        <div className="products-rating">
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star"></span>
                        </div>
                        <div className="price">$499</div>
                    </div>
                </div>
                <div className="featured-product">
                    <img className="product-photo" src={Product3} alt="#" className="product3" />
                    <div className="product-description">
                        <h3 className="products-title">Netatmo Rain Gauge</h3>
                        <div className="products-rating">
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star"></span>
                        </div>
                        <div className="price">$499</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProduct;