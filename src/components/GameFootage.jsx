import React from 'react';
import videoFile from '../assets/game6.mp4';

function GameFootage() {
  return (
    <>
      <video width="600" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </video>
    </>
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