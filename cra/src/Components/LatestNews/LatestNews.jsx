import React from 'react';
import './LatestNews.css';
import News1 from '../../img/news1.svg';
import News2 from '../../img/news2.svg';
import News3 from '../../img/news3.svg';

function LatestNews() {
    return (
        <section className="latest-news">
        <h2>Latest news</h2>
        <div className="news">
            <div className="news-link">
                <img src={News1} alt="#" className="news1"/>
                <div className="news-description">
                    <div className="news-date">01 Jan, 2015</div>
                    <h3 className="news-title">Typesetting industry</h3>
                    <p className="news-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="news-link">
                <img src={News2} alt="#" className="news2"/>
                <div className="news-description">
                    <div className="news-date">01 Jan, 2015</div>
                    <h3 className="news-title">Typesetting industry</h3>
                    <p className="news-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="news-link">
                <img src={News3} alt="#" className="news3"/>
                <div className="news-description">
                    <div className="news-date">01 Jan, 2015</div>
                    <h3 className="news-title">Typesetting industry</h3>
                    <p className="news-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    </section>
        );
}

export default LatestNews;