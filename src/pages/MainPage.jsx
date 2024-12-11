import React from 'react';
import './MainPage.css';
import Header from '../components/Header';
import GameFootage from '../components/GameFootage';
import BoxScore from '../components/BoxScore';
import PlayerSearch from '../components/PlayerSearch';

function MainPage() {
    return (
        <>
            <Header />
            <GameFootage />
            <BoxScore />
            <PlayerSearch />
        </>
    )
}

export default MainPage;