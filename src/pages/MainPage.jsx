import React from 'react';
import './MainPage.css';
import Header from '../components/Header';
import GameFootage from '../components/GameFootage';
import BoxScore from '../components/BoxScore';
import Footer from '../components/Footer';

function MainPage() {
    return (
        <div id="main-page">
            <Header />
            <GameFootage />
            <BoxScore />
            <Footer />
        </div>
    )
}

export default MainPage;