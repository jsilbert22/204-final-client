import React from 'react';
import './MainPage.css';
import Header from '../components/Header';
import GameFootage from '../components/GameFootage';
import BoxScore from '../components/BoxScore';

function MainPage() {
    return (
        <>
            <Header />
            <GameFootage />
            <BoxScore />
        </>
    )
}

export default MainPage;