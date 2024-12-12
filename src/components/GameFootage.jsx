import React from 'react';
// import videoFile from '../assets/game6.mp4';
import './GameFootage.css';
import Header from './Header';

function GameFootage() {
  return (
    <div id="game-footage">
      <video width="600" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        {/* YouTube link: https://www.youtube.com/watch?v=PZVCrKcOl78 */}
      </video>
    </div>
  );
}

export default GameFootage;

// {/* game 6 */}
// <iframe
// src="https://www.youtube.com/embed/PZVCrKcOl78?autoplay=1&mute=1"
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// allowFullScreen
// title="YouTube Video"
// ></iframe>
// {/* game 7 */}
// <iframe
// src="https://www.youtube.com/embed/yqAEEjyXvUQ?autoplay=1&mute=1"
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// allowFullScreen
// title="YouTube Video"
// ></iframe>