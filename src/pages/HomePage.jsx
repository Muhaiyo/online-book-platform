import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import NewReleases from '../components/NewReleaseBooks';
import Subscribe from '../components/Subscribe';
import Articles from '../components/Articles';
import Footer from '../components/Footer';
import '../styles/HomePage.css'
const HomePage = () => {
    return (
        <div className="Home">
            <Header />
            <Slider />
            <Categories />
            <NewReleases />
            <Subscribe />
            <Articles/>
            <Footer/>
        </div>
    )
}

export default HomePage