import React from 'react';
import videoFile from '../assets/cards.mp4';
import './VideoBanner.css';
import { SquareArrowDownLeft } from 'lucide-react';

function VideoBanner() {
    return (
        <div id="video-banner">
            <video width="600" autoPlay loop muted playsInline preload="auto">
                <source src={videoFile} type="video/mp4" />
                {/* YouTube link: https://www.youtube.com/watch?v=PZVCrKcOl78 */}
            </video>
            <header>
                <div id="inner-text">
                    <h1>It's not in the Cards, they said...</h1>
                </div>
                <div id="icon">
                    <SquareArrowDownLeft size={150} strokeWidth={0.75} color="rgb(239, 236, 236)"/>
                </div>
            </header>
        </div>
    )
}

export default VideoBanner;