import React from 'react';
import './MainPage.css';
import BoxScore from '../components/BoxScore';
import Footer from '../components/Footer';
import VideoBanner from '../components/VideoBanner';
import PlayerSearch from '../components/PlayerSearch';

function MainPage() {
    return (
        <div id="main-page">
            <VideoBanner />
            <p id="series-summary">
                The 2011 World Series between the St. Louis Cardinals and the Texas Rangers was an unforgettable 
                showdown filled with resilience and drama. The Rangers, chasing their first title, came within 
                one strike of victory twice in Game 6, only for the Cardinals to rally both times. David Freese 
                was the hero of the night, tying the game in the ninth with a triple and winning it in the 11th 
                with a walk-off home run. That momentum carried the Cardinals into Game 7, where they clinched 
                their 11th championship behind a strong performance from Chris Carpenter and timely hitting. 
                Freese's heroics earned him Series MVP honors, capping a miraculous postseason run for a team 
                that barely made the playoffs. It remains one of the most thrilling and memorable World Series 
                in baseball history.<br></br><br></br>Relive the magic by clicking through the box scores and 
                reading the corresponding summaries below.
            </p>
            <BoxScore />
            <p id="player-search-intro">
                The 2011 World Series cemented the legacies of several Cardinals into franchise history. Notable
                names include David Freese and Albert Pujols, though it truly takes an army to pull off 
                any feat of championship magnitude. Use the Player Search Feature below to learn more about your 
                favorite past and present Cardinals, or any MLB stars that come to mind.
            </p>
            <PlayerSearch />
            <Footer />
        </div>
    )
}

export default MainPage;