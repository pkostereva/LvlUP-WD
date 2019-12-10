import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import TopPromo from './Components/TopPromo/TopPromo';
import TopGadgets from './Components/TopGadgets/TopGadgets';
import Bestseller from './Components/Bestseller/Bestseller'; 
import MainOffer from './Components/MainOffer/MainOffer';
import Advantages from './Components/Advantages/Advantages'; 
import LatestNews from './Components/LatestNews/LatestNews';
import FeaturedProduct from './Components/FeaturedProduct/FeaturedProduct';
import Search from './Components/Search/Search';
import Footer from './Components/Footer/Footer';


function App() {
    return ( 
      <>
        <Header / >
        <TopPromo / >
        <TopGadgets / >
        <Bestseller / >
        <MainOffer / >
        <Advantages / >
        <LatestNews / >
        <FeaturedProduct />
        <Search />
        <Footer />
      </>
    );
}

export default App;